import mongoose,{Schema} from 'mongoose'

const ProductSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        discount:{
            type:Number,
            default:0
        },
        bgcolor:{
            type:String,
            required:true
        },
        panelcolor:{
            type:String,
            required:true
        },
        textcolor:{
            type:String,
            required:true
        },
        image: {
            type: String,   //cloudinary url
            required: true,
        },
    },
{
    timestamps: true
}
)

export const Product = mongoose.model("Product", ProductSchema)