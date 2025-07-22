import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import bicRougeLogo from './assets/Logo.svg'; 
import backgraoundImage from './assets/teacher_ai-colab.jpg';

// Data for Llama 3 8B Instruct Metrics (from user's code)
const llama3Data = {
  coherence: {
    average: 4.43,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 2 },
      { name: 'Score 4', value: 1 },
      { name: 'Score 5', value: 4 }
    ]
  },
  fluency: {
    average: 4.29,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 0 },
      { name: 'Score 4', value: 5 },
      { name: 'Score 5', value: 2 }
    ]
  },
  similarity: {
    average: 3.29,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 1 },
      { name: 'Score 3', value: 3 },
      { name: 'Score 4', value: 3 },
      { name: 'Score 5', value: 0 }
    ]
  }
};

// Data for GPT-3.5 Turbo Metrics (from user's code)
const gpt35Data = {
  coherence: {
    average: 4.71,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 1 },
      { name: 'Score 4', value: 0 },
      { name: 'Score 5', value: 6 }
    ]
  },
  fluency: {
    average: 4.57,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 1 },
      { name: 'Score 4', value: 1 },
      { name: 'Score 5', value: 5 }
    ]
  },
  similarity: {
    average: 3.43,
    counts: [
      { name: 'Score 1', value: 0 },
      { name: 'Score 2', value: 0 },
      { name: 'Score 3', value: 3 },
      { name: 'Score 4', value: 4 },
      { name: 'Score 5', value: 0 }
    ]
  }
};

// New color palette based on the provided image (image_64cb03.png)
// Using the peach/pink, light blue, and purplish-blue shades.
const NEW_PALETTE_COLORS = [
  '#FFDCDC', // Score 1: Very light peach/pink
  '#FFB2A7', // Score 2: Slightly darker peach/salmon
  '#A7D9FF', // Score 3: Light blue/cyan (adjusted for better contrast with scores)
  '#6A5ACD', // Score 4: Medium purple-blue
  '#D42F2F'  // Score 5: Darker red/maroon (from the Bic Rouge logo)
];

// Custom Tooltip for Recharts Pie Chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-2 bg-white border border-gray-300 rounded-md shadow-lg text-sm">
        <p className="font-semibold">{`${data.name}`}</p>
        <p>{`Count: ${data.value}`}</p>
        <p>{`Percentage: ${(payload[0].percent * 100).toFixed(2)}%`}</p>
      </div>
    );
  }
  return null;
};

// Metric Card Component for displaying individual metric charts
const MetricCard = ({ title, averageScore, data }) => {
  const filteredData = data.filter(entry => entry.value > 0);
  const totalCount = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-sm mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="relative w-full h-80 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
              labelLine={false}
              label={({ name }) => `${name.replace('Score ', '')}`}
            >
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={NEW_PALETTE_COLORS[parseInt(entry.name.replace('Score ', '')) - 1]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => `Score ${value.replace('Score ', '')}`}
              iconType="circle"
              itemStyle={{ fontSize: '0.9rem', margin: '0 5px' }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Centered text within the donut hole */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl font-bold text-gray-900">
            {averageScore.toFixed(2)} / 5
          </p>
          <p className="text-lg text-gray-600 mt-1">Average Score</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700">
        Total tests: {totalCount}
      </p>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeModel, setActiveModel] = useState('llama3');
  const currentData = activeModel === 'llama3' ? llama3Data : gpt35Data;

  // Placeholder for YouTube video URL
  const youtubeVideoUrl = "https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"; // REPLACE WITH YOUR ACTUAL YOUTUBE EMBED LINK

  // State for "back to top" button visibility
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Effect to handle scroll event for the "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) { // Show button after scrolling 300px down
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
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
      <header className="hero-background py-16 md:py-24 lg:py-32 flex items-center justify-center min-h-screen">
        <div className="content-z-2 container mx-auto px-6 text-center">
          {/* Bic Rouge Logo  */}
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

      {/* Introduction & Problem Statement Section */}
      <section id="introduction" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
            The Challenge in Education & Our Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                High student-to-teacher ratios across Africa, reaching up to 1/200 in the DRC,
                create immense challenges. Manual grading of theoretical exams is not only time-consuming
                but also subjective, leading to teacher burnout and hindering personalized student feedback.
              </p>
              <blockquote className="text-xl italic font-medium text-gray-600 border-l-4 border-red-500 pl-4">
                "Our goal is to leverage AI to empower educators, making grading more efficient,
                consistent, and fair for every student."
              </blockquote>
            </div>
            <div className="flex justify-center">
              <img
                src="https://placehold.co/600x400/FFB2A7/333333?text=Classroom+Image"
                alt="High student-to-teacher ratio classroom"
                className="rounded-xl shadow-xl w-full max-w-md"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is Bic Rouge?</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Bic Rouge is an intelligent system leveraging Large Language Models (LLMs) to assist
              teachers in grading theoretical exams, streamlining the process and enhancing educational accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-red-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.232z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Correction Generation</h3>
              <p className="text-gray-600">
                Generate accurate corrections for theoretical exams automatically using advanced LLMs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Teacher Validation & Adjustment</h3>
              <p className="text-gray-600">
                Teachers can easily validate and adjust generated corrections, maintaining control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-green-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Immediate Student Feedback</h3>
              <p className="text-gray-600">
                Provide students with instant, personalized feedback to accelerate their learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-purple-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modular & Scalable Architecture</h3>
              <p className="text-gray-600">
                Built for flexibility and growth, easily adapting to increasing demands and new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Architecture Section */}
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
                  <span className="font-semibold text-red-600">GPT-3.5 Turbo:</span> A proprietary model known for its reliability and high performance in various NLP tasks.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Llama 3 8B-Instruct:</span> A leading open-source model, highly prized for its accessibility, adaptability, and strong community support.
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for System Architecture Diagram */}
              <img
                src="https://placehold.co/600x400/A7D9FF/333333?text=System+Architecture+Diagram"
                alt="Bic Rouge System Architecture Diagram"
                className="rounded-xl shadow-xl w-full max-w-md"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">System Workflow</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              The Bic Rouge system is built with Python, FastAPI for the backend API, and ReactJS for the frontend,
              deployed on Azure AI. This robust architecture ensures seamless interaction from student submission to teacher validation and feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Experimental Results Section - Integrates user's provided code */}
      <section id="experimental-results" className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-6xl p-4 md:p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            LLM Performance Metrics Dashboard
          </h2>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
            <button
              onClick={() => setActiveModel('llama3')}
              className={`px-5 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out
                ${activeModel === 'llama3' ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Llama 3 8B Instruct
            </button>
            <button
              onClick={() => setActiveModel('gpt35')}
              className={`px-5 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out
                ${activeModel === 'gpt35' ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              GPT-3.5 Turbo
            </button>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
            Results of {activeModel === 'llama3' ? 'Llama 3 8B Instruct' : 'GPT-3.5 Turbo'} Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MetricCard
              title="Coherence"
              averageScore={currentData.coherence.average}
              data={currentData.coherence.counts}
            />
            <MetricCard
              title="Fluency"
              averageScore={currentData.fluency.average}
              data={currentData.fluency.counts}
            />
            <MetricCard
              title="Similarity"
              averageScore={currentData.similarity.average}
              data={currentData.similarity.counts}
            />
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Interpretation of Results:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              The dashboards present the automated test results for GPT-3.5 Turbo and LLaMA 3 8B Instruct
              in Azure AI Studio Evaluation. The test evaluates three key performance metrics: coherence,
              fluency, and similarity, each rated on a scale from 1 to 5, where 5 is the best score.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Coherence and Fluency:</span> GPT-3.5 Turbo scores slightly higher than LLaMA 3 8B
                Instruct, indicating better performance in generating logical and natural-sounding text.
              </li>
              <li>
                <span className="font-semibold">Similarity:</span> Both models perform slightly equally, struggling to generate text closely
                matching the grounded truth (teacher's correction).
              </li>
            </ul>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <span className="font-semibold">Conclusion:</span> GPT-3.5 Turbo has a slight edge over LLAMA 3 8B Instruct in coherence and
              fluency, while both models are slightly similar in handling similarity tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion & Future Directions Section */}
      <section id="conclusion" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
            Conclusion & Future Directions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conclusion</h3>
              <p className="text-lg leading-relaxed mb-6">
                Bic Rouge successfully demonstrates the feasibility of LLM-powered automated grading,
                providing a robust architecture that improves efficiency and offers immediate,
                personalized feedback. This project highlights the significant potential for AI to
                transform educational practices, allowing educators to focus more on teaching and less on manual grading.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Recent studies show 80-90% time savings with AI grading tools, underscoring the
                immense potential time-saving for educators using an automated grading assistant like Bic Rouge.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Future Work</h3>
              <ul className="list-disc list-inside text-lg space-y-3">
                <li>
                  <span className="font-semibold">Enhancing Accuracy:</span> Fine-tuning models and integrating Retrieval-Augmented
                  Generation (RAG) for context-aware evaluations to further improve grading precision.
                </li>
                <li>
                  <span className="font-semibold">Broader Accessibility:</span> Developing a mobile application and integrating vision models
                  to grade handwritten exams, addressing infrastructure limitations in diverse educational settings.
                </li>
                <li>
                  <span className="font-semibold">Exploring New Models:</span> Continuously integrating more advanced LLMs as they become
                  available to ensure Bic Rouge remains at the forefront of AI-powered grading.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="video" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Watch Our Presentation
          </h2>
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={youtubeVideoUrl}
              title="Bic Rouge Research Project Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-gray-600 mt-6 text-lg">
            Learn more about Bic Rouge, its development, and its impact in our full presentation video.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-bold">Note:</span> Please replace "YOUR_YOUTUBE_VIDEO_ID" in the code with your actual YouTube embed link.
          </p>
        </div>
      </section>

      {/* Footer Section */}
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
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 z-50"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
