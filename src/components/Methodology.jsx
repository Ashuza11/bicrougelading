import SystemArchitectureDiagram from "../assets/BickRouge_Architecture.png"

const Methodology = () => {
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
                    src={SystemArchitectureDiagram}
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
    );
};

export default Methodology
    
