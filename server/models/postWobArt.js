import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    word: String,
    pronunciation: String,
    partOfSpeech: String,
    definition: String,
    artistName: String,
    selectedFile: String,
    creator: String,
    /************ Social Media Links ************/
    websiteLink: String,
    instagramLink: String,
    youtubeLink: String,
    behanceLink: String,
    dribbbleLink: String,
    facebookLink: String,
    twitterLink: String,
    /************ ****************** ************/
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