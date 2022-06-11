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

export const getPost = async (req, res) => {
}

export const createPost = async (req, res) => {
    const { word, partOfSpeech, definition, artistName, selectedFile, creator, websiteLink, instagramLink, youtubeLink, behanceLink, dribbbleLink, facebookLink, twitterLink, } = req.body;

    const newPostWobArt = new PostWobArt({ word, partOfSpeech, definition, artistName, selectedFile, creator, websiteLink, instagramLink, youtubeLink, behanceLink, dribbbleLink, facebookLink, twitterLink, })

    try {
        await newPostWobArt.save();

        res.status(201).json(newPostWobArt);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
}

export const deletePost = async (req, res) => {
}

export const likePost = async (req, res) => {
}

export default router; 