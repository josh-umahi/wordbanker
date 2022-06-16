import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    word: String,
    pronunciation: String,
    partOfSpeech: String,
    definition: String,
    artistName: String,
    artistLink: String,
    selectedFile: String,
    creatorOfPost: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostWobArt = mongoose.model('PostWobArt', postSchema);

export default PostWobArt;