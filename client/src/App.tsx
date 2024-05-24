import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAppContext } from './context/AppContext';
import Navbar from './components/Navbar/Navbar';
import Home from './routes/Home/Home';
import Auth from './routes/Auth/Auth';
import PostDetails from './routes/PostDetails/PostDetails';
import Footer from './components/Footer/Footer';
import PageNotFound from './routes/PageNotFound/PageNotFound';

const App = () => {
  const { user } = useAppContext()! || {};
  // Notice I removed the exact prop from the Route component.
  // This is because React Router V6+ doesn't support it anymore.
  // They may have left the functionality working to avoid breaking changes. However, the types must have been updated.
  // Paths are now exact by default. So for non-exact paths, you can use /users/* for example.
  return (
    <BrowserRouter>
      <div style={{ minHeight: 'calc(100vh - 152px)' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/posts' />} />
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/search' element={<Home />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route
            path='/auth'
            element={!user ? <Auth /> : <Navigate to='/posts' />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
