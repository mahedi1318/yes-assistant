"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What Is a Virtual Assistant?",
    answer:
      "A Virtual Assistant is a remote professional who provides administrative, technical, or creative support to businesses and individuals.",
  },
  {
    question: "What Are the Responsibilities of a Virtual Assistant?",
    answer:
      "Responsibilities may include managing emails, scheduling appointments, customer support, research, data entry, and more.",
  },
  {
    question: "How Are YesAssistants Virtual Assistants Different From Others?",
    answer:
      "YesAssistants VAs are carefully trained, reliable, and dedicated to providing high-quality support tailored to your needs.",
  },
  {
    question: "What Will My Assistant's Working Hours Be?",
    answer:
      "Working hours can be customized according to your business requirements, whether part-time or full-time.",
  },
  {
    question: "How Do I Communicate With My VA?",
    answer:
      "You can communicate via email, phone, WhatsApp, Zoom, or any other preferred tool.",
  },
  {
    question: "Are Your VAs Trained?",
    answer:
      "Yes, all our VAs go through professional training before being assigned to clients.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-3">
        FAQs About Virtual Assistant
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Got more questions about virtual assistants? Find all the answers here!
      </p>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-2 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[28px] roboto font-bold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-xl font-bold text-gray-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}