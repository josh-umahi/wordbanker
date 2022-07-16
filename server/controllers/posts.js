import express from 'express';
import mongoose from 'mongoose';

import PostWobArt from '../models/postWobArt.js';
import getPronunciation from '../utils/getPronunciation.js';
import formatLink from '../utils/formatLink.js';
import getShuffledArray from '../utils/shuffleArray.js';
import recommendedPostIds from '../constants/recommendedPostIds.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = 6;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

        const total = await PostWobArt.countDocuments({});
        const posts = await PostWobArt.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const word = new RegExp("^" + searchQuery, "i");

        const posts = await PostWobArt.find({ word });

        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;
    const { isWotd } = req.query;

    try {
        const post = await PostWobArt.findById(id);
        let recommendedPosts;

        if (isWotd !== "YES") {
            const postIds = getShuffledArray(id, recommendedPostIds, 5)
            recommendedPosts = await PostWobArt.find(
                {
                    "_id": {
                        "$in": postIds
                    }
                },
                { word: 1 }
            );
        }

        res.status(200).json({ data: { post, recommendedPosts } });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const pronunciationLink = await getPronunciation(post.word)

    const newPostWobArt = new PostWobArt({
        ...post,
        artistLink: formatLink(post.artistLink),
        pronunciation: pronunciationLink,
        creator: req.userId,
        createdAt: new Date().toISOString()
    })

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

    const updatedPost = {
        ...post,
        artistLink: formatLink(post.artistLink),
        _id: id
    };

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