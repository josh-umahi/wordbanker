import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    word: String,
    pronunciation: String,
    partOfSpeech: String,
    definition: String,
    artistName: String,
    artistLink: String,
    selectedFile: String,
    creator: String, // the user's id
    username: String, // the user's username
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostWobArt = mongoose.model('PostWobArt', postSchema);

export default PostWobArt;