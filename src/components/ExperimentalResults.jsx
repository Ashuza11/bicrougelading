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
  );
};

export default ExperimentalResults;