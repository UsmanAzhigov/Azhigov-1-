import * as React from 'react';
import { FullPost } from './pages/FullArticle';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';

export default function App() {
  const pathname = window.location.pathname;
  const id = pathname.split('/posts/')[1];
  return (
    <>
      <Header />
      {pathname === '/' && <Home />}
      {pathname === '/about' && <About />}
      {pathname === '/login' && <h1>Логин</h1>}
      {pathname.includes('/posts/') && <FullPost id={id} />}
      <Footer />
    </>
  );
}
