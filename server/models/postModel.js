import mongoose from 'mongoose';

const postSchema  = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tag: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostModel = mongoose.model('post', postSchema);

export default PostModel;