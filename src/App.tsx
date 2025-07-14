import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import NotFound from './pages/404';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {

  return (
    <>        
      <Navbar />
      <section className="max-w-4xl mx-auto py-5 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<Post />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App
