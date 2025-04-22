"use client"

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { programs } from '@/app/dummy';
import ViewAllButton from '@/shared/viewbtn';

export default function ProgramsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  const sliderRef = useRef(null);
  


  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = activeSlide * sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-medium text-gray-800">Programs we offer <span className="font-bold text-gray-900">for Kids</span></h2>
        <ViewAllButton/>
      </div>
      
      <div className="relative">
    
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="min-w-full md:min-w-[33.333%] lg:min-w-[25%] px-2 snap-start"
              >
                <div className={`${program.cardColor} rounded-lg p-4 h-64 flex flex-col justify-between`}>
                  <div>
                    <h3 className="font-bold text-lg">{program.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{program.subtitle}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                 <ViewAllButton/>
                    <img src={program.image} alt={program.title} className="w-24 h-24 object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all z-10"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all z-10"
        >
          <ChevronRight size={20} />
        </button>
       
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${activeSlide === index ? 'bg-red-700 w-4' : 'bg-gray-300'} transition-all`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}