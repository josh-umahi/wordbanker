import React from 'react'

import "./styles.css"
import theImage from "../../assets/122.jpeg"

const Post = () => {
    const _theWotd_name = "ludicrous"
    const _pronPluspos = "(loo-di-kruhs) adjective"
    const _theWotd_meaning = "so foolish and unreasonable that it is amusing; ridiculous"
    const _theWotdArtistNAME = "Vinay Pittampally"

    return (
        <div className="postContainer">
            <div className="postInnerContainer">
                <div className="postInnerContainer2">
                    <div className="postInnerContainer3">
                        <div className="postDescription">
                            <h1>{_theWotd_name}</h1>
                            <h2>{_pronPluspos}</h2>
                            <div className="thinLineDivider" />
                            <h3>{_theWotd_meaning}</h3>
                        </div>
                        <div className="postOtherInfo">
                            <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{_theWotdArtistNAME}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <img className="postImage" src={theImage} alt="" />
        </div>
    )
}

export default Post