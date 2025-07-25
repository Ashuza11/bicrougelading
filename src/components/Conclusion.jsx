

const Conclusion = () => {
    return (
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
    );
};

export default Conclusion
    
