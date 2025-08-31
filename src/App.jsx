import React, { useState, useEffect } from 'react';
import { llama3Data, gpt35Data } from './data';
import backgraoundImage from './assets/teacher_ai-colab.jpg';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Features from './components/Features';
import Methodology from './components/Methodology';
import ExperimentalResults from './components/ExperimentalResults';
import Conclusion from './components/Conclusion';
import Video from './components/Video';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';




// Main App Component
const App = () => {
  const [activeModel, setActiveModel] = useState('llama3');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const currentData = activeModel === 'llama3' ? llama3Data : gpt35Data;

  useEffect(() => {
  const handleScroll = () => {
  setShowScrollToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-800">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter font for better typography */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
          /* Custom styles for the hero section background */
          .hero-background {
            background-image: url(${backgraoundImage});
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* Optional: for parallax effect */
            position: relative;
          }
          .hero-background::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%); /* Fading white overlay */
            z-index: 1;
          }
          .content-z-2 {
            position: relative;
            z-index: 2;
          }
          .bic-rouge-logo {
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          }
        `}
      </style>

      {/* Hero Section */}
      <Header />
      <main>
        <Introduction />
        <Features />
        <Methodology />
        <ExperimentalResults
          activeModel={activeModel}
          setActiveModel={setActiveModel}
          currentData={currentData}
        />
        <Conclusion />
        <Video youtubeVideoUrl={"https://www.youtube.com/embed/dbF-duYn0LM"} />
      </main>
      <Footer />

      {showScrollToTop && <ScrollToTopButton onClick={scrollToTop} />}
    </div>
  );
};

export default App;
