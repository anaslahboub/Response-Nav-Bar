import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar.tsx';
import About from './component/page/about/about.tsx';
import Blog from './component/page/blog/blog.tsx';
import Contact from './component/page/contact/contact.tsx';
import Home from './component/page/home/home.tsx';

function App() {
  const HeaderLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
