import React from 'react'

import Posts from '../Posts/Posts'
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';
import BrowseWords from '../BrowseWords/BrowseWords';

const Home = () => {
    return (
        <div>
            <WordOfTheDay />
            <div style={{ backgroundColor: "#f6f5f5" }}>
                <BrowseWords />
                <Posts />
            </div>
        </div>
    )
}

export default Home