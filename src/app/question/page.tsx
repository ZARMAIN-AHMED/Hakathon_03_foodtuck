'use client'


import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Navbar from "../topnav/page";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    "How we serve food?",
    "How is our food quality?",
    "How do we give home delivery?",
    "How can we get in touch with you?",
    "What will be delivered? And When?",
    "Is this restaurant 24 hours open?",
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div >
        <Navbar />
    <div className="  py-16 px-4">
       
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-orange-500 pt-20">
        Questions Look Here
      </h1>
      <p className="text-lg text-center mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the main.
      </p>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto mb-20">
        {questions.map((question, index) => (
          <div
            key={index}
            className="shadow shadow-slate-300 rounded-lg p-4 hover:bg-gray-100 transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h2 className="text-lg font-semibold">{question}</h2>
              <FiPlus
                className={`w-6 h-6 transition-transform ${
                  activeIndex === index ? "rotate-45 text-orange-500" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-400 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            )}
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default FAQ;
