import React, { useRef } from 'react'
import { Skeleton } from '@mui/material';
import { CircularProgress, IconButton } from '@material-ui/core';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import placeholderImage from '../../assets/placeholder_image.png'
import "./styles.css"
import Likes from '../Likes/Likes';
import MoreOptions from '../MoreOptions/MoreOptions';
import { Post } from '../../../types/Post';

const spacing = <div style={{ margin: "4.5px" }}></div>

type PostExpandedProps = {
    post: Post;
    todaysDate: string;
}

type AudioAndPartOfSpeechProps = {
    isLargeDevice?: boolean;
}
const PostExpanded:React.FC<PostExpandedProps>  = ({ post, todaysDate }) => {
    const audioPlayer = useRef<HTMLAudioElement>(null);

    const AudioAndPartOfSpeech: React.FC<AudioAndPartOfSpeechProps> = ({ isLargeDevice }) => {
        return (
            <div className='soundDiv'>
                <audio preload="auto" ref={audioPlayer} src={post.pronunciation} />
                {
                    post.pronunciation &&
                    <IconButton style={{ padding: 0, marginRight: "6px" }} onClick={() => audioPlayer.current!.play()}>
                        <VolumeUpIcon sx={{ color: isLargeDevice ? "#0071f0" : "white" }} />
                    </IconButton>
                }
                <h2>{post.partOfSpeech}</h2>
            </div>
        )
    }

    const ArtBy = () => (
        <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;
            <a className='artistName' target="_blank" rel="noopener noreferrer" href={post.artistLink}>{post.artistName}</a>
        </h4>
    )

    const PostBy = () => (
        <h4>posted by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.username}</span></h4>
    )

    const isLoading = post ? false : true
    return (
        <section className="postExpandedContainer">
            {todaysDate && <h2>{"Word Of The Day: " + todaysDate}</h2>}

            <div className="largeDevicesContainer">
                <div className="largeDevicesInnerContainer">
                    <div className="largeDevicesInnerContainer2">
                        <div className="largeDevicesInnerContainer3">
                            {
                                isLoading ?
                                    <>
                                        <Skeleton width="50%" height={60} />
                                        <Skeleton width="35%" height={50} />
                                        <Skeleton width="90%" height={130} />
                                    </>
                                    :
                                    <>
                                        <div className="largeDevicesDescription">
                                            <h1>{post.word}</h1>
                                            <AudioAndPartOfSpeech isLargeDevice />
                                            <h3>{post.definition}</h3>
                                        </div>
                                        <div className="largeDevicesOtherInfo">
                                            <div className="largeDevicesOtherInfoInnerContainer">
                                                <Likes post={post} leftAlign />
                                                {!todaysDate && <MoreOptions post={post} />}
                                            </div>
                                            <ArtBy />
                                            <PostBy />
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                    <img className="largeDevicesImage" src={isLoading ? placeholderImage : post.selectedFile} alt="" />
                </div>
            </div>

            <div className="smallDevicesContainer">
                {todaysDate && <h2 className="smallDevicesHeading">WORD OF THE DAY<br /><span>{todaysDate}</span></h2>}
                <img className="smallDevicesImage" src={isLoading ? placeholderImage : post.selectedFile} alt="" />

                <div className="smallDevicesInnerContainer">
                    {

                        isLoading ?
                            <div style={{ color: "white", margin: "3em auto 2em" }}>
                                <CircularProgress color="inherit" />
                            </div>
                            :
                            <>
                                <div className="smallDevicesDescription">
                                    <h1>{post.word}</h1>
                                    <AudioAndPartOfSpeech />
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
                            </>
                    }
                </div>
            </div>
        </section>
    )
}

export default PostExpanded