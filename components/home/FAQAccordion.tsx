'use client';

import { useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title: string;
  questions: Question[];
}

export default function FAQAccordion({ title, questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            {title}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-2 border-neutral-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-neutral-900 pr-8">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 bg-neutral-50">
                  <p className="text-neutral-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
