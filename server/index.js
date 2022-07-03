import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from "./routes/user.js";

dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true })) // 30mb limit is because I'll be working with images that may be large in size
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL = `mongodb+srv://${process.env.CONNECTION_URL_USERNAME}:${process.env.CONNECTION_URL_PASSWORD}@cluster0.vlpsr4k.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error}: Did not connect`));
