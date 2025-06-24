import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GearPage from './pages/Gear';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import HomelabPage from './pages/Homelab';
import Footer from './components/Footer';
import NotFoundPage from './pages/404Page';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {

  return (
    <>
      <Navbar />
      <section className="max-w-xl mx-auto py-5 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gear" element={<GearPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/homelab' element={<HomelabPage />} />
          <Route path='/printing' element={<PrintingPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<Post />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App
