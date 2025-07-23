import React from 'react';
import bicRougeLogo from './assets/Logo.svg'; 

const Header = () => (
  <header className="hero-background py-16 md:py-24 lg:py-32 flex items-center justify-center min-h-screen">
    <div className="content-z-2 container mx-auto px-6 text-center">
      <div className="mb-8">
        <img
          src={bicRougeLogo}
          alt="Bic Rouge Logo"
          className="mx-auto h-24 sm:h-32 bic-rouge-logo"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
        Revolutionizing Theoretical Exam Grading with AI
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
        Leveraging GPT-3.5 Turbo and Llama-3 for Enhanced Educational Accessibility and Efficiency.
      </p>
      <a
        href="#experimental-results"
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Explore Our Findings
      </a>
    </div>
  </header>
);

export default Header;