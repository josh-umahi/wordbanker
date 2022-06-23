import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

import UserModal from "../models/user.js";

dotenv.config()

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UserModal.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.AUTH_PRIVATE_KEY, { expiresIn: "7d" });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UserModal.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);
        const username = generateUsername(email)

        const result = await UserModal.create({ email, password: hashedPassword, username });

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.AUTH_PRIVATE_KEY, { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};

const generateUsername = (email) => {
    const index = email.indexOf("@");
    return email.slice(0, index)
}
