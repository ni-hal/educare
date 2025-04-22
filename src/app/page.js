
"use client";
import BlogSection from "@/compoments/blog";
import EducareStory from "@/compoments/EducareStory";
import FAQAccordion from "@/compoments/faq";
import Footer from "@/compoments/footer";
import Hero from "@/compoments/Hero";
import Map from "@/compoments/Map";
import MarqueeText from "@/compoments/marque";
import Masters from "@/compoments/masters";
import Navbar from "@/compoments/Navbar";
import ProgramCards from "@/compoments/programe";
import Subjectslider from "@/compoments/Subjectslider";
import TeachingSection from "@/compoments/teching";
import Testimonial from "@/compoments/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <EducareStory /> */}
      <TeachingSection />
      <ProgramCards />
      <Subjectslider />
      <Masters />
      <Map />
      <Testimonial />
    
      <FAQAccordion />
      <BlogSection />
      <Footer />








    </div>

  );
}
