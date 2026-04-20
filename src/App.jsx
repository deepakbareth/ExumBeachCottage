import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Layout/Footer';
import Navbar from './component/Layout/Navbar';
import Home from './pages/Home';
import ContactPage from './component/ContactPage/ContactPage';
import AboutUsPage from './component/AboutUsPage/AboutUsPage';
import TheCottage from './component/TheCottage/TheCottage';

// Constants
const BASE_PATH = '/exumbeachcottage';

// Lazy load non-critical pages
const GalleryPage = lazy(() => import('./component/GalleryPage/GalleryPage'));
const ReviewsPage = lazy(() => import('./component/ReviewsPage/ReviewsPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`${BASE_PATH}/`} element={<Home />} />
        <Route
          path={`${BASE_PATH}/gallery`}
          element={
            <Suspense fallback={<PageLoader />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route path={`${BASE_PATH}/about`} element={<AboutUsPage />} />
        <Route
          path={`${BASE_PATH}/reviews`}
          element={
            <Suspense fallback={<PageLoader />}>
              <ReviewsPage />
            </Suspense>
          }
        />
        <Route path={`${BASE_PATH}/contact`} element={<ContactPage />} />
        <Route path={`${BASE_PATH}/the-cottage`} element={<TheCottage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;