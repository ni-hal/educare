import React from 'react';
import Image from 'next/image';
import { ArrowRight, Rocket } from 'lucide-react';

const EducareSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-amber-50 rounded-lg my-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left content area */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">
            The Story of <span className="text-emerald-700">Educare</span>
          </h1>
          
          <p className="mb-4 text-gray-700">
            At <span className="font-medium">Educare</span> education center, we believe that every student deserves personalized, focused attention to reach 
            their fullest potential. Our mission is to empower students through one-on-one tutoring, creating customized 
            learning plans tailored to each individual's unique needs, strengths, and learning styles.
          </p>
          
          <p className="mb-4 text-gray-700">
            Founded on a passion for education and a commitment to excellence, <span className="font-medium">Educare</span> education center was
            established to offer students a supportive and engaging learning environment. Our team of experienced tutors
            is dedicated to helping students excel academically while also building confidence, independence, and a love
            for learning.
          </p>
          
          <p className="mb-6 text-gray-700">
            We specialize in a wide range of subjects across all grade levels, including math, science, English, and test
            preparation. Whether your child needs help catching up, getting ahead or preparing for a specific exam, we are
            here to support their journey.
          </p>
          
          <button className="bg-red-800 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-900 transition-colors">
            Read more <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Right image area */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="w-64 h-64 relative rotate-3 border-8 border-red-800 rounded-lg overflow-hidden">
              <Image 
                src="/api/placeholder/400/320" 
                alt="Students studying with a tutor" 
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
            <div className="w-48 h-48 absolute -bottom-6 -left-12 -rotate-6 border-8 border-white rounded-lg overflow-hidden">
              <Image 
                src="/api/placeholder/320/320" 
                alt="Student reading" 
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission and Vision boxes */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {/* Mission box */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute -top-6 -left-6 bg-red-100 p-2 rounded-full">
            <div className="bg-white p-2 rounded-full">
              <Image 
                src="/api/placeholder/60/60" 
                alt="Megaphone icon" 
                width={60} 
                height={60}
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-red-800 mt-6 mb-3">Mission</h2>
          <p className="text-gray-700">
            To help students succeed with personalized, 
            <span className="font-bold">one-to-one tutoring</span> that builds
            confidence, skills, and a love for learning.
          </p>
        </div>
        
        {/* Vision box */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute -top-6 -left-6 bg-red-100 p-2 rounded-full">
            <Rocket size={64} className="text-red-800" />
          </div>
          <h2 className="text-xl font-bold text-red-800 mt-6 mb-3">Vision</h2>
          <p className="text-gray-700">
            To be a trusted center where students 
            reach their potential, build confidence,
            and prepare for a <span className="font-bold">bright future</span>.
          </p>
          <div className="absolute -bottom-6 -right-6">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-red-800">
              <path d="M10,30 Q30,10 50,30 Q30,50 10,30" stroke="currentColor" fill="none" strokeWidth="3" />
              <circle cx="50" cy="30" r="5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducareSection;