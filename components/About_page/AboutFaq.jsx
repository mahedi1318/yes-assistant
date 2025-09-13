"use client";

import Image from 'next/image';
import { useState } from 'react';


const faqs = [
  {
    question: 'Is there a setup fee?',
    answer:
      'There is no setup fee. If you are ready to start, we can get started your work as soon as possible.',
  },
  {
    question: 'How are my hours tracked?',
    answer: 'We track hours using reliable time-tracking software and send regular reports.',
  },
  {
    question: 'What if I want a different assistant?',
    answer: 'We’ll work with you to find someone who better suits your needs.',
  },
  {
    question: 'Do I get a dedicated assistant?',
    answer: 'Yes, you get a dedicated assistant tailored to your project.',
  },
];

export default function AboutFAQPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
      {/* Left Side - FAQ */}
      <div>
        <p className="text-red-600 font-medium">Questions and Answers</p>
        <h2 className="text-4xl font-bold text-slate-800 mb-4">General FAQs</h2>
        <p className="text-gray-600 mb-8">
          The primary reason businesses hire virtual assistants is to lower their costs. Over the five years,
          we have developed a more distinctive profile of the Virtual Assistant industry. Have a question about how YesAssistant works? Read more here!
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-4 py-3 font-semibold flex justify-between items-center ${
                  index === activeIndex ? 'bg-red-600 text-white' : 'bg-gray-100'
                }`}
              >
                {faq.question}
                <span>{index === activeIndex ? '▴' : '▾'}</span>
              </button>
              {index === activeIndex && (
                <div className="px-4 py-3 text-sm text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block">
        <Image
          src="/about-1.webp"
          alt="People working together"
          className="rounded-lg"
          width={600}
          height={500}
          objectFit="cover"
        />
      </div>
    </div>
  );
}