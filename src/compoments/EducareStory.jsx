"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import image1 from "../../public/Vector1.png"; 
import image2 from "../../public/Vector2.png"; 
import image3 from "../../public/Vector3.png"; 
import border1 from "../../public/Vector.png";  
import border2 from "../../public/Vector2.png"; 

const images = [
    image1,
    image3,
    image2, 
];

const EducareStory = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-6 py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Story of <span className="text-primary">Educare</span>
                    </h2>
                    <p className="text-gray-700 mb-4">
                        At <strong>Educare</strong> education center, we believe that every student
                        deserves personalized, focused attention to reach their fullest potential.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Founded on a passion for education and a commitment to excellence, Educare
                        was established to offer students a supportive and engaging learning
                        environment.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Whether your child needs help catching up, getting ahead, or preparing for
                        a specific exam, we are here to support their journey.
                    </p>
                    <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
                        Read more →
                    </button>
                </div>

                <div className="relative w-60 h-60">
                   
                    <Image
                        src={images[index].src}
                        alt="Educare Story"
                        fill
                        className="object-cover z-0 rounded-none"
                    />

                   
                    <Image
                        src="/images/stamp-border-red.png" 
                        alt="Stamp Border"
                        fill
                        className="absolute top-0 left-0 z-10 pointer-events-none"
                    />
                </div>

                <div className="absolute bottom-0 right-0 translate-x-6 translate-y-6 w-40 h-40">
                    <div className="relative w-full h-full">
                        <Image
                            src={images[(index + 1) % images.length].src}
                            alt="Educare Story 2"
                            fill
                            className="object-cover z-0"
                        />
                        <Image
                            src="/images/stamp-border-cream.png"
                            alt="Stamp Border"
                            fill
                            className="absolute top-0 left-0 z-10 pointer-events-none"
                        />
                    </div>
                </div>

            </div>

          
            <div className="mt-16 grid md:grid-cols-2 gap-8">

  <div className="bg-[#FFF4E8] p-6 rounded-xl shadow-md relative">
    <h3 className="text-xl font-bold text-[#7A0925] mb-2">Mission</h3>
    <p className="text-gray-700">
      To help students succeed with personalized, <strong>one-to-one</strong> tutoring that builds
      confidence, skills, and a love for learning.
    </p>
    <div className="absolute -top-4 -right-4 w-16 h-16">
      <Image
        src="/images/flag-icon.png" 
        alt="Mission Icon"
        fill
        className="object-contain"
      />
    </div>
  </div>

  {/* Vision */}
  <div className="bg-[#FFF4E8] border border-[#7A0925] p-6 rounded-xl shadow-md relative">
    <h3 className="text-xl font-bold text-[#7A0925] mb-2">Vision</h3>
    <p className="text-gray-700">
      To be a trusted center where students reach their potential, build confidence, and prepare
      for a <strong>bright future</strong>.
    </p>
    <div className="absolute -top-4 -right-4 w-16 h-16">
      <Image
        src="/images/rocket-icon.png" 
        alt="Vision Icon"
        fill
        className="object-contain"
      />
    </div>
  </div>
</div>

        </section>
    );
};

export default EducareStory;
