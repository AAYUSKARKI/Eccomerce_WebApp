import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';

const userschema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        avatar: {
            type: String,   //cloudinary url
            required: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        cart: [
            {
                productId: { 
                              type: Schema.Types.ObjectId,
                              ref: 'Product' 
                        },
                quantity: { 
                             type: Number,
                              default: 1 
                        }
            }
        ],
        orders: [
            {
                orderId: {
                            type: Schema.Types.ObjectId,
                            ref: 'Order' 
                        },
                status: {   
                            type: String,
                            default: 'pending' 
                        }
            }
        ],
        contact:{
            type:Number,
            required:true
        },
        address:{
            type: String,
            required: [true, 'address is required']
        },
        isadmin:{
            type:Boolean,
            default:false
        },
        refreshtoken: {
            type: String
        },
        passwordresettoken: {
            type: String
        },
        passwordresetexpires: {
            type: Date
        }
    },
    {
        timestamps: true
    }

)

userschema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userschema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userschema.methods.generateAccessToken = function (){
    return jwt.sign({
        _id:this._id,
        email: this.email,
        username: this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userschema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}

userschema.methods.createPasswordResetToken = function(){
    let resettoken = Math.floor(Math.random()*1000000).toString()
    resettoken = resettoken.padStart(6, '0')
    this.passwordresettoken = resettoken
    this.passwordresetexpires = Date.now() + 10*60*1000
    return resettoken
}

export const User = mongoose.model("User", userschema)