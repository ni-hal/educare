"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { courses } from "@/app/dummy";
import ViewAllButton from "@/shared/viewbtn";

const Masters = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
    
      <div>
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center flex justify-center md:text-left w-full">
          Master in <span className="text-rose-600">IELTS, TOEFL</span> Exams
        </h2>
        <div>
        <ViewAllButton/>
        </div>
     
      </div>
      </div>
      

   
      <Swiper
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
       {courses.map((course, index) => (
  <SwiperSlide key={index}>
    <div className="relative w-full max-w-[300px] mx-auto group transition-all duration-300">
  
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-rose-600 rounded-2xl z-0 rotate-2 group-hover:rotate-0 group-hover:bottom-0 group-hover:right-0 transition-all duration-300 ease-in-out"></div>

 
      <div className="relative bg-[#fef7f7] rounded-2xl shadow-md overflow-hidden z-10 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <div className="w-full h-40 relative">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-rose-900 group-hover:text-rose-600 transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-sm text-gray-700 mt-1">
            {course.description}
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

      </Swiper>

    
    </div>
  );
};

export default Masters;
