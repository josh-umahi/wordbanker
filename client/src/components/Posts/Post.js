import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./styles.css"
import Likes from '../Likes/Likes'

const spacing = <div style={{ margin: "6px" }}></div>

const Post = ({ post }) => {
    const navigate = useNavigate();

    const openPost = (e) => {
        navigate(`/posts/${post._id}`);
    };

    return (
        <button className="postContainer" onClick={openPost}>
            <div className="postInnerContainer">
                <div className="postInnerContainer2">
                    <div className="postInnerContainer3">
                        <div className="postDescription">
                            <h1>{post.word}</h1>
                            <h2>{`(${post.pronunciation}) ${post.partOfSpeech}`}</h2>
                            <div className="thinLineDivider" />
                            <h3>{post.definition}</h3>
                        </div>
                        <div className="postOtherInfo">
                            <Likes post={post} />
                            {spacing}
                            <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;
                                <a className='artistName' target="_blank" rel="noopener noreferrer" href={post.artistLink}>{post.artistName}</a>
                            </h4>
                            {spacing}
                            <h4>posted by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.username}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <img className="postImage" src={post.selectedFile} alt="" />
        </button>
    )
}

export default Post