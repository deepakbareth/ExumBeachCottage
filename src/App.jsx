import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Layout/Footer'
import Navbar from './component/Layout/Navbar'
import Home from './pages/Home'
import GalleryPage from './component/GalleryPage/GalleryPage';
import ReviewsPage from './component/ReviewsPage/ReviewsPage';
import ContactPage from './component/ContactPage/ContactPage';
import AboutUsPage from './component/AboutUsPage/AboutUsPage';


function App() {
  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/exumbeachcottage/" element={<Home />} />
        <Route path="/exumbeachcottage/gallery" element={<GalleryPage />} />
        <Route path="/exumbeachcottage/about" element={<AboutUsPage />} />
        <Route path="/exumbeachcottage/reviews" element={<ReviewsPage />} />
        <Route path="/exumbeachcottage/contact" element={<ContactPage />} />

      </Routes>
     <Footer />
    </>
  )
}

export default App

