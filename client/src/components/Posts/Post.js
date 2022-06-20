import React from 'react'

import "./styles.css"
import Likes from '../Likes/Likes'

const spacing = <div style={{ margin: "6px" }}></div>

const Post = ({ post }) => {
    return (
        <div className="postContainer">
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
                            <Likes likeCount={post.likeCount} />
                            {spacing}
                            <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.artistName}</span></h4>
                            {spacing}
                            <h4>post by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.artistName}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <img className="postImage" src={post.selectedFile} alt="" />
        </div>
    )
}

export default Post