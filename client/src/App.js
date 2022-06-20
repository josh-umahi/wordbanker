import React from 'react'

import Navbar from './components/Navbar/Navbar';
import ModalForm from './components/ModalForm/ModalForm';
import Posts from './components/Posts/Posts';
import WordOfTheDay from './components/WordOfTheDay/WordOfTheDay';
import BrowseWords from './components/BrowseWords/BrowseWords';

const App = () => {
  return (
    <div>
      <Navbar />
      <WordOfTheDay />
      <div style={{ backgroundColor: "#f6f5f5" }}>
        <BrowseWords />
        <Posts />
      </div>
      <ModalForm key="CREATE" typeOfForm="CREATE" />
      <ModalForm key="EDIT" typeOfForm="EDIT" />
    </div>
  )
}

export default App