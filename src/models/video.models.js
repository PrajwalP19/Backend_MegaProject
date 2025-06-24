import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile: {
        type:  String,  //cloudinary url
        required: true,
        unique: true,
        },
        thumbnail: {
        type:  String,
        required: true,
        },
        title: {
        type:  String,
        required: true,
        },
        description: {
        type:  String,  //cloudinary url
        required: true
        },
        time: {
        type:  Number,  //cloudinary url
        },
        password: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
)

videoSchema.plugin(mongoose)
export const Video = mongoose.model("Video", videoSchema)