import Image from "next/image"
import image from '../../public/assets/hero1.svg'
import image1 from "../../public/assets/hero2.svg"
import vison from '../../public/assets/img.png'
import mision from "../../public/assets/f81c6dc4-4a3b-48b0-bae6-e563e1883fe4 1.png"


const Hero = () => {
    return (
        <main className="flex flex-col min-h-screen bg-white">

            <section className="relative w-full bg-white border-t-4 border-rose-800">
                <div className="max-w-6xl mx-auto px-4 py-8 relative">

                    <div className="absolute top-4 right-4 z-10">
                        <button className="bg-green-500 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </button>
                    </div>


                    <div className="absolute right-0 top-1/3 z-10">
                        <button className="bg-rose-800 text-white px-2 py-8 rounded-l-md transform rotate-90 origin-bottom-right translate-y-full">
                            Feedback
                        </button>
                    </div>


                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-rose-800">Personalized One-to-One</h1>
                        <h2 className="text-xl md:text-2xl text-rose-700">Tutoring at Our Center</h2>
                        <div className="flex justify-center mt-4">
                            <div className="w-1 h-1 bg-rose-800 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Left illustration */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div className="absolute inset-0 bg-amber-50 rounded-full"></div>
                                <Image
                                    src={image}
                                    alt="Tutor with student"
                                    width={320}
                                    height={320}
                                    className="relative z-10"
                                />
                            </div>
                        </div>

                        {/* Center content */}
                        {/* <div className="my-8 md:my-0 flex flex-col items-center">
                            <button className="bg-rose-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-rose-900 transition-colors flex items-center">
                                Book a Free Demo Class
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>

                            <div className="mt-12">
                                <p className="text-rose-800 font-medium mb-4">Curriculums we offer:</p>
                                <div className="flex justify-center items-center gap-6">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <span className="text-blue-500 font-bold">P</span>
                                    </div>
                                    <div className="relative">
                                        <Image src={im} alt="Curriculum logo" width={40} height={40} />
                                    </div>
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <span className="text-green-500 font-bold">SABIS</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Right illustration */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div className="absolute inset-0 bg-amber-50 rounded-full"></div>
                                <Image
                                    src={image1}
                                    alt="Family with trophy"
                                    width={320}
                                    height={320}
                                    className="relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values section */}
            <section className="w-full bg-amber-50 py-4">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
                        <div className="flex items-center">
                            <span className="text-rose-800 mr-2">👤</span>
                            <span className="text-rose-800 font-medium">Personal Attention</span>
                        </div>
                        <div className="hidden md:block text-gray-300">|</div>
                        <div className="flex items-center">
                            <span className="text-rose-800 mr-2">🧠</span>
                            <span className="text-rose-800 font-medium">Growth Mindset</span>
                        </div>
                        <div className="hidden md:block text-gray-300">|</div>
                        <div className="flex items-center">
                            <span className="text-rose-800 mr-2">📈</span>
                            <span className="text-rose-800 font-medium">Skill Development</span>
                        </div>
                        <div className="hidden md:block text-gray-300">|</div>
                        <div className="flex items-center">
                            <span className="text-rose-800 mr-2">❤️</span>
                            <span className="text-rose-800 font-medium">Passionate Teaching</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story section */}
            <section className="w-full bg-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left content */}
                        <div className="w-full md:w-3/5">
                            <h2 className="text-2xl font-medium mb-4">
                                The Story of <span className="font-bold">Educare</span>
                            </h2>

                            <p className="text-gray-700 mb-4">
                                At <strong>Educare</strong> education center, we believe that every student deserves personalized
                                focused attention to reach their fullest potential. Our mission is to empower students through
                                one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs,
                                strengths, and learning styles.
                            </p>

                            <p className="text-gray-700 mb-4">
                                Founded on a passion for education and a commitment to excellence, <strong>Educare</strong> education
                                center was established to offer students a supportive and engaging learning environment. Our team of
                                experienced tutors is dedicated to helping students excel academically while also building confidence,
                                independence, and a love for learning.
                            </p>

                            <p className="text-gray-700 mb-4">
                                We specialize in a wide range of subjects across all grade levels, including math, science, English, and
                                test preparation. Whether your child needs help catching up, getting ahead, or preparing for a specific
                                exam, we are here to support their journey.
                            </p>

                            <button className="bg-rose-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-rose-900 transition-colors flex items-center mt-4">
                                Learn more
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Right content - Stamp images */}
                        <div className="w-full md:w-2/5 flex justify-center">

                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision section */}
            <section className="w-full bg-amber-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Mission */}
                        <div className="w-full md:w-1/2 bg-white rounded-lg p-6 relative">
                            <div className="absolute -top-6 -left-6">
                                <Image src={mision} alt="Book icon" width={80} height={80} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-rose-800">Mission</h3>
                            <p className="text-gray-700">
                                To help students succeed with personalized <strong>one-to-one tutoring</strong> that builds confidence,
                                skills, and a love for learning.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="w-full md:w-1/2 bg-white rounded-lg p-6 relative">
                            <div className="absolute -bottom-6 -right-6">
                                <Image src={vison} alt="Decorative element" width={80} height={80} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-rose-800">Vision</h3>
                            <p className="text-gray-700">
                                To be a trusted center where students reach their potential, build confidence, and prepare for a bright
                                future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero