import express from 'express';
import mongoose from 'mongoose';

import PostWobArt from '../models/postWobArt.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postWobArts = await PostWobArt.find();

        res.status(200).json(postWobArts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await PostWobArt.find({ $or: [{ title }] });

        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostsByCreator = async (req, res) => {
    const { username } = req.query;

    try {
        const posts = await PostWobArt.find({ username });

        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostWobArt.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPostWobArt = new PostWobArt({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostWobArt.save();

        res.status(201).json(newPostWobArt);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { ...post, _id: id };

    await PostWobArt.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostWobArt.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await PostWobArt.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostWobArt.findByIdAndUpdate(id, post, { new: true });

    res.status(200).json(updatedPost);
}

export default router; 