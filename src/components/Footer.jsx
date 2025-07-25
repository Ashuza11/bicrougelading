import React from 'react';
import bicRougeLogo from '../assets/Logo.svg';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="mb-8">
            {/* <h3 className="text-2xl font-bold mb-4">Bic Rouge</h3> */}
            <img
              src={bicRougeLogo}
              alt="Bic Rouge Logo"
              className="mx-auto h-12 sm:h-16 my-4 w-auto bic-rouge-logo"
            />

            <p className="text-gray-400 max-w-2xl mx-auto">
              Revolutionizing theoretical exam grading for enhanced educational accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-red-400">Authors</h4>
              <ul className="space-y-1 text-gray-300">
                <li>MUHIGIRI Ashuza Albin'</li>
                <li>Prof. BARAKA MUSHAGE Olivier</li>
                <li>Ms. KRAME KADURHA David</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-red-400">Affiliations</h4>
              <p className="text-gray-300">
                Université Libre des Pays des Grands Lacs,<br />
                Democratic Republic of the Congo (DRC)
              </p>
              <a href="https://ulpgl.net" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline mt-2 block">
                ulpgl.net
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-red-400">Acknowledgements</h4>
              <p className="text-gray-300">
                Deep Learning Indaba 2025 | #DLIndaba2025
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Bic Rouge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;