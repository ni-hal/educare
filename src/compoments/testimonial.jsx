"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";

import { testimonials } from "@/app/dummy";

export default function TestimonialSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
     
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-10">
        Hear from our <span className="font-bold text-gray-700">Valuable Parents</span>
      </h2>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="relative border rounded-xl p-6 bg-white shadow-md h-full">
             
              <div className="absolute top-4 right-4 text-yellow-500 text-4xl font-bold">”</div>

              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-500">– {t.title}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">"{t.message}"</p>

            
              <div className="flex mt-4 space-x-1 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
