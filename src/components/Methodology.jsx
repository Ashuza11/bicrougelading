import React from 'react';
import SystemArchitectureDiagram from '../assets/BickRouge_Architecture.png';
import GptIcon from '../assets/ions/gpt.jpg'; // Your imported GPT-3.5 Turbo icon
import LlamIcon from '../assets/ions/llama3.jpg'; // Your imported Llama 3 icon
import PythonIcon from '../assets/ions/python.png'; // Your imported Python icon
import ReactIcon from '../assets/ions/React-icon.png'; // Your imported ReactJS icon
import FastApiIcon from '../assets/ions/fastAPI.jpeg'; // Your imported FastAPI icon
import AzureIcon from '../assets/ions/Azure.png'; // Your imported Azure AI icon


const Methodology = () => {
    const iconSizeClasses = "inline-block h-6 w-auto ml-2 align-middle"; 

    return (
        <section id="methodology" className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
                    Methodology & Architecture
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">LLM Integration</h3>
                        <p className="text-lg leading-relaxed mb-6">
                            We rigorously evaluated and compared two powerful Large Language Models for this task:
                        </p>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            <li>
                                <span className="font-semibold text-red-600">GPT-3.5 Turbo:</span>
                                <img src={GptIcon} alt="GPT-3.5 Turbo Logo" className={iconSizeClasses} />
                                {' '}A proprietary model known for its reliability and high performance in various NLP tasks.
                            </li>
                            <li>
                                <span className="font-semibold text-blue-600">Llama 3 8B-Instruct:</span>
                                <img src={LlamIcon} alt="Llama 3 Logo" className={iconSizeClasses} />
                                {' '}A leading open-source model, highly prized for its accessibility, adaptability, and strong community support.
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        {/* System Architecture Diagram remains as is */}
                        <img
                            src={SystemArchitectureDiagram}
                            alt="Bic Rouge System Architecture Diagram"
                            className="rounded-xl shadow-xl w-full max-w-md"
                        />
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">System Workflow</h3>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-2">
                        The Bic Rouge system is built with
                        <span className="flex items-center">
                            <span className="font-semibold">Python</span>
                            <img src={PythonIcon} alt="Python Logo" className={iconSizeClasses} />
                        </span>,
                        <span className="flex items-center">
                            <span className="font-semibold">FastAPI</span>
                            <img src={FastApiIcon} alt="FastAPI Logo" className={iconSizeClasses} />
                        </span>
                        for the backend API, and
                        <span className="flex items-center">
                            <span className="font-semibold">ReactJS</span>
                            <img src={ReactIcon} alt="ReactJS Logo" className={iconSizeClasses} />
                        </span>
                        for the frontend, deployed on
                        <span className="flex items-center">
                            <span className="font-semibold">Azure AI</span>
                            <img src={AzureIcon} alt="Azure AI Logo" className={iconSizeClasses} />
                        </span>This robust architecture ensures seamless interaction from student submission to teacher validation and feedback.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Methodology;