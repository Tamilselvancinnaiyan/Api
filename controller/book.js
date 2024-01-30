import axios from 'axios';
import PostMessage from '../models/modelFile.js';

export const book = async (req, res) => {
    try {
        const genderizeResponse = await axios.get('https://api.genderize.io', {
            params: {
                name: 'Mary'
            }
        });
        res.status(200).json(genderizeResponse.data);
    } catch (error) {
        console.error("Error occurred:", error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log("inside the route")
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
