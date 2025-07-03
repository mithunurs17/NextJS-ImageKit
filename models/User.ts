import mongoose, {Schema, model, models} from "mongoose";
import bcrypt from "bcryptjs";


export interface IUser {
    email: string;
    password: string;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
//declaring the schema
const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {
    timestamps: true,

});
//Writing Hooks for the schema
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

//Creating the model, <> are the typescript generics
//models is an object that contains all the models that are already created
const User = models?.User || model<IUser>('User', userSchema);

//Exporting the model
export default User;