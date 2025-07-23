import React from 'react';
import MetricCard from './MetricCard';

const ExperimentalResults = ({ activeModel, setActiveModel, currentData }) => {
  return (
    <section id="experimental-results" className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-6xl p-4 md:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          LLM Performance Metrics Dashboard
        </h2>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
          <button
            onClick={() => setActiveModel('llama3')}
            className={`px-5 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out ${activeModel === 'llama3' ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Llama 3 8B Instruct
          </button>
          <button
            onClick={() => setActiveModel('gpt35')}
            className={`px-5 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out ${activeModel === 'gpt35' ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
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
          {/* Interpretation Text... */}
        </div>
      </div>
    </section>
  );
};

export default ExperimentalResults;