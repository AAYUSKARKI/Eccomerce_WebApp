import mongoose,{Schema} from 'mongoose'

const MessageSchema = new Schema(
    {
        senderid:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        receiverid:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        message:{
            type: String,
            trim: true,
            required: true
        },
        file:{
            type: String
        },
        isseen:{
            type: Boolean,
            default: false
        }
      
    },
{
    timestamps: true
}
)

export const Message = mongoose.model("Message", MessageSchema)