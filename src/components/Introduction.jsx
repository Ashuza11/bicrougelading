import React from 'react';
import HighStudenttoTeacherRatio from "../assets/ratio.png"

const Introduction = () => {
  return (
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
              src={HighStudenttoTeacherRatio}
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
  );
};

export default Introduction;