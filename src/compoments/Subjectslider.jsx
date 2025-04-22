'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';


import { subjects } from '@/app/dummy';
import ViewAllButton from '@/shared/viewbtn';

const Subjectslider = () => {
  return (
    <div className=" mx-auto px-4 py-12 bg-[#fcf9f6] text-center">
    <div className="relative flex items-center justify-center mb-8">
  <h2 className="text-2xl font-bold text-center ">Subjects We Teach</h2>
  <div className="absolute right-0 flex items-center space-x-2">
    <ViewAllButton />
  </div>
</div>
  
    <div className="relative max-w-7xl mx-auto">
   
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
            el: '.custom-pagination', 
          }}
        
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="relative"
      >
        {subjects.map((subject, index) => (
          <SwiperSlide key={`${subject.name}-${index}`}>
            <div className="bg-[#fff5e9] rounded-xl shadow p-6 flex flex-col items-center justify-center">
              <img src={subject.icon} alt={subject.name} className="h-24 mb-4" />
              <h3 className="text-lg font-semibold text-[#951f3c]">{subject.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  
   
      <button className="custom-prev absolute -left-5 top-1/2 transform -translate-y-1/2 z-10  text-black p-2 rounded-full shadow ">
        <ChevronLeft size={24} />
      </button>
  
    
      <button className="custom-next absolute -right-5 top-1/2 transform -translate-y-1/2 z-10  text-black p-2 rounded-full shadow ">
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
  
  );
};

export default Subjectslider;
