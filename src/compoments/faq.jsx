// // Mark this file as a client-side component
// "use client";

// import React, { useState } from "react";
// import { faqItems } from "@/app/dummy";
// import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons for better UX

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-3xl mx-auto py-8 px-4">
//       <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      
//       <div className="space-y-4">
//         {faqItems.map((item, index) => (
//           <div 
//             key={index} 
//             className="border border-gray-200 rounded-md overflow-hidden"
//           >
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
//             >
//               <span className="font-medium text-gray-800">{item.question}</span>
//               {openIndex === index ? (
//                 <ChevronUp className="h-5 w-5 text-gray-500" />
//               ) : (
//                 <ChevronDown className="h-5 w-5 text-gray-500" />
//               )}
//             </button>
            
//             {openIndex === index && (
//               <div className="px-4 pb-4 text-gray-600">
//                 {item.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

// Mark this file as a client-side component
"use client";

import React, { useState } from "react";
import { faqItems } from "@/app/dummy";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-md shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="py-4 px-6 text-gray-600 border-t border-gray-100">
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