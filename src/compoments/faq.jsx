// Mark this file as a client-side component
"use client"; 

import React, { useState } from "react";
import { faqItems } from "@/app/dummy";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close the FAQ if it's already open
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-semibold py-3 px-4 hover:bg-gray-100 focus:outline-none"
            >
              {item.question}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 text-sm bg-gray-50 rounded-b-md">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
