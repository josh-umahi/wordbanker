import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import { useAppContext } from './context/AppContext';

const App = () => {
  const { user } = useAppContext()

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/auth" exact element={!user ? <Auth /> : <Navigate to="/posts" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App