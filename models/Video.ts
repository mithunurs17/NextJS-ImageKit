import mongoose, {Schema, model, models} from "mongoose";
import bcrypt from "bcryptjs";

export const VIDEO_DIMENSIONS = {
    width: 1080,
    height: 1920
} as const;
// ? is used for optional 
export interface IVideo{
    _id?: mongoose.Types.ObjectId
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    tranformation?: {
        height: number;
        width: number;
        quality?: number;
    };
}

//declaring the schema
const videoSchema = new Schema<IVideo>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
        trim: true,
    },
    controls: {
        type: Boolean,
        default: true
    },
    tranformation: {
        height: {
            type: Number,
            default: VIDEO_DIMENSIONS.height
        },
        width: {
            type: Number,
            default: VIDEO_DIMENSIONS.width
        },
        quality: {
            type: Number,
            min: 1,
            max: 100,
            default: 80
        }
    }
}, {
    timestamps: true
});

const Video = models?.Video || model<IVideo>('Video', videoSchema);

//Exporting the model
export default Video;