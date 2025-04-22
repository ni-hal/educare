import Image from "next/image";
import image from "../../public/assets/Rectangle18243.png"

const TeachingSection = () => {
  return (
    <section className="bg-[#fefaf6] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Our way of <span className="text-rose-700">Teaching</span>
          </h2>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base list-disc pl-5">
            <li>
              Every teacher at <strong>Educare</strong> brings passion to their lessons, making learning enjoyable with engaging activities tailored to inspire and motivate each student.
            </li>
            <li>
              We focus on creating a supportive environment where individual strengths are recognized, and personalized attention helps students excel.
            </li>
            <li>
              Our approach combines innovative teaching methods with real-world applications, ensuring students not only learn but also understand and apply their knowledge effectively.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src={image} 
              alt="Teaching Method"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
