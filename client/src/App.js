import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAppContext } from './context/AppContext';
import Navbar from './components/Navbar/Navbar';
import Home from './routes/Home/Home';
import Auth from './routes/Auth/Auth';
import PostDetails from './routes/PostDetails/PostDetails';
import Footer from './components/Footer/Footer';
import PageNotFound from './routes/PageNotFound/PageNotFound';

const App = () => {
  const { user } = useAppContext()

  return (
    <BrowserRouter>
      <div style={{ minHeight: "calc(100vh - 152px)" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route path="/auth" exact element={!user ? <Auth /> : <Navigate to="/posts" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App