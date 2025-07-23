import React from 'react';
import bicRougeLogo from '../assets/Logo.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <div className="mb-8">
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
                    {/* Authors, Affiliations, Acknowledgements divs... */}
                </div>

                <div className="border-t border-gray-700 pt-8 mt-8">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Bic Rouge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;