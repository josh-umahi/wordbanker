import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Navbar from './components/Navbar/Navbar';
import ModalForm from './components/ModalForm/ModalForm';
import Posts from './components/Posts/Posts';
import WordOfTheDay from './components/WordOfTheDay/WordOfTheDay';
import BrowseWords from './components/BrowseWords/BrowseWords';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Navbar />
      <WordOfTheDay />
      <div style={{ backgroundColor: "#f6f5f5" }}>
        <BrowseWords />
        <Posts />
      </div>
      <ModalForm typeOfForm="CREATE" />
      <ModalForm typeOfForm="EDIT" />
    </div>
  )
}

export default App