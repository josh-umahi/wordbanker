import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./styles.css"

const Post = ({ post }) => {
    const navigate = useNavigate();

    const openPost = (e) => {
        e.preventDefault();

        navigate(`/posts/${post._id}`);
    };

    return (
        <button className="postContainer" onClick={openPost}>
            <div className="postInnerContainer">
                <div className="postInnerContainer2">
                    <div className="postInnerContainer3">
                        <div className="postDescription">
                            <h1>{post.word}</h1>
                            <div className="thinLineDivider" />
                            <h3>{post.definition}</h3>
                        </div>
                        <div className="postOtherInfo">
                            <h5>View in Detail</h5>
                        </div>
                    </div>
                </div>
            </div>
            <img className="postImage" src={post.selectedFile} alt="" />
        </button>
    )
}

export default Post