import React from 'react';
import { FullPost } from './pages/FullArticle';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<h3>404 not found</h3>}></Route>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h1>Логин форма</h1>} />
        <Route path="/post/:id" element={<FullPost />} />
      </Routes>
      <Footer />
    </>
  );
}
