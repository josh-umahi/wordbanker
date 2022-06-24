import React from 'react'

import "./styles.css"
import Likes from '../Likes/Likes';
import MoreOptions from '../MoreOptions/MoreOptions';

const spacing = <div style={{ margin: "4.5px" }}></div>

const PostExpanded = ({ post, todaysDate }) => {
    const ArtBy = () => (
        <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;
            <a className='artistName' target="_blank" rel="noopener noreferrer" href={post.artistLink}>{post.artistName}</a>
        </h4>
    )

    const PostBy = () => (
        <h4>posted by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.username}</span></h4>
    )

    return (
        <section className="postExpandedContainer">
            {todaysDate && <h2>{"Word Of The Day: " + todaysDate}</h2>}

            <div className="largeDevicesContainer">
                <div className="largeDevicesInnerContainer">
                    <div className="largeDevicesInnerContainer2">
                        <div className="largeDevicesInnerContainer3">
                            <div className="largeDevicesDescription">
                                <h1>{post.word}</h1>
                                <h2>{`(${post.pronunciation}) ${post.partOfSpeech}`}</h2>
                                <h3>{post.definition}</h3>
                            </div>
                            <div className="largeDevicesOtherInfo">
                                <div className="largeDevicesOtherInfoInnerContainer">
                                    <Likes post={post} leftAlign />
                                    <MoreOptions post={post} />
                                </div>
                                <ArtBy />
                                <PostBy />
                            </div>
                        </div>
                    </div>

                    <img className="largeDevicesImage" src={post.selectedFile} alt="" />
                </div>
            </div>

            <div className="smallDevicesContainer">
                {todaysDate && <h2 className="smallDevicesHeading">WORD OF THE DAY<br /><span>{todaysDate}</span></h2>}
                <img className="smallDevicesImage" src={post.selectedFile} alt="" />

                <div className="smallDevicesInnerContainer">
                    <div className="smallDevicesDescription">
                        <h1>{post.word}</h1>
                        <h2>{`(${post.pronunciation}) ${post.partOfSpeech}`}</h2>
                        <div className="thinLine" />
                        <h3>{post.definition}</h3>
                    </div>
                    <div className="smallDevicesOtherInfo">
                        <Likes post={post} />
                        {spacing}
                        <ArtBy />
                        {spacing}
                        <PostBy />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostExpanded