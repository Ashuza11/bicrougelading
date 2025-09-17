import React from 'react';

// A simple download icon component
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const Downloads = () => {
  return (
    <section id="downloads" className="py-16 bg-gray-100"> {/* Consistent background */}
      <div className="container mx-auto px-6">
        {/* Adjusted heading style to match other sections */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Project Downloads</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card for Poster Download */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-80 md:w-96 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Poster Presentation</h3>
            <p className="text-gray-600 mb-6">
              Download the scientific poster summarizing our research project.
            </p>
            <a
              href="/files/research-poster.pdf"
              download="Research_Poster_Presentation.pdf"
              className="inline-flex items-center justify-center bg-red-600 text-white font-medium py-3 px-6 rounded-md shadow-sm hover:bg-red-700 transition-colors duration-300 w-full"
              // Adjusted button styling to be flatter and match the model selector's active state
            >
              <DownloadIcon />
              Download Poster (PDF)
            </a>
          </div>

          {/* Card for Memoire Download */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-80 md:w-96 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Research Memoire</h3>
            <p className="text-gray-600 mb-6">
              Access the full research memoire for in-depth analysis and results.
            </p>
            <a
              href="/files/research-memoire.pdf"
              download="Research_Memoire.pdf"
              className="inline-flex items-center justify-center bg-gray-600 text-white font-medium py-3 px-6 rounded-md shadow-sm hover:bg-gray-700 transition-colors duration-300 w-full"
              // Adjusted button styling to be flatter and match the model selector's inactive state
            >
              <DownloadIcon />
              Download Memoire (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;