


const Features = () => {
    return (
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
    );

};

export default Features
    
