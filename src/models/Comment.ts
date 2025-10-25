import mongoose, { Schema } from "mongoose";

// Schema definition
const CommentSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            maxlength: [100, 'Name cannot be more than 100 characters'],
            trim: true,
        },
        email: {
            type: String,
            maxlength: [100, 'Email cannot be more than 100 characters'],
            trim: true,
            default: '',
        },
        message: {
            type: String,
            required: [true, 'Please provide a message'],
            maxlength: [1000, 'Message cannot be more than 1000 characters'],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent model recompilation in development
const CommentModel = mongoose.models.Comment ?? mongoose.model('Comment', CommentSchema);

export default CommentModel;