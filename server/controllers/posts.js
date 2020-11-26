import PostModel from '../models/postModel.js';

export const getPosts = async (req, res) => {
    try {
        const postsMessages = await PostModel.find();
        res.status(200).json(postsMessages);
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (req, res) => {
    res.send('Post Creation');
}