import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homebar from './Components/Homebar';
import Amazing from './Components/Amazing';
import About from './Components/About';
import Research from './Research/Research/Research';
import ResearchBlog from './Research/Research/SubPages/ResearchBlog';
import Loader from './Common/Loader';

function App() {
  const location = useLocation();  // React Router location hook
  const [isLoading, setIsLoading] = useState(false);

  // Set the loading state based on route change
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);  // Delay to simulate loading
    setIsLoading(true); // Show loader when the route is changing
    return () => clearTimeout(timeout); // Clear timeout when unmounted
  }, [location]);

  return (
    <>
      {isLoading ? (  // Conditionally show the loader
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Amazing />} />
          <Route path="/amazing" element={<Homebar />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<ResearchBlog />} />
          <Route path="*" element={<div className="chakra-petch-bold text-5xl text-blue-900">PAGE NOT FOUND</div>} />
        </Routes>
      )}
    </>
  );
}

export default App;
