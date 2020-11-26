import PostModel from '../models/postModel.js';

export const getPosts = async (req, res) => {
    try {
        const postsMessages = await PostModel.find();
        res.status(200).json(postsMessages);
    } catch (error) {
        console.log(error);
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}