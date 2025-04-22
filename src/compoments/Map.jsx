
import Image from "next/image"
import { Play } from "lucide-react"
import map from "../../public/assets/map.svg"
import img from "../../public/assets/mimg.svg"
import img1 from "../../public/assets/mimg1.svg"
import img2 from "../../public/assets/mimg2.svg"
import img3 from "../../public/assets/mimg4.svg"
import img4 from "../../public/assets/mimg5.svg"
import img5 from "../../public/assets/mimg6.svg"
import img6 from "../../public/assets/mimg7.svg"
import img7 from "../../public/assets/ming8.svg"
import youtube from "../../public/assets/youtube.png"
import MarqueeText from "./marque"
const Map = () => {
    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* World Map Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                        Prepare Your Child for a World of Opportunities with Educare
                    </h2>

                    <div className="relative">
                        <Image
                            src={map}
                            alt="World map with students around the globe"
                            width={1000}
                            height={400}
                            className="mx-auto"
                        />


                        <div className="absolute top-[15%] left-[10%]">
                            <Image
                                src={img}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                        <div className="absolute top-[20%] left-[25%]">
                            <Image
                                src={img1}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                        <div className="absolute top-[15%] right-[30%]">
                            <Image
                                src={img2}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                        <div className="absolute top-[20%] right-[15%]">
                            <Image
                                src={img3}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                        <div className="absolute bottom-[30%] left-[15%]">
                            <Image
                                src={img4}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                        <div className="absolute bottom-[40%] left-[35%]">
                            <Image
                                src={img5}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                        <div className="absolute bottom-[35%] right-[25%]">
                            <Image
                                src={img6}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                        <div className="absolute bottom-[25%] right-[10%]">
                            <Image
                                src={img7}
                                alt="Student"
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-white"
                            />
                        </div>
                    </div>


                </div>
            </div>
            <MarqueeText />
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="mt-16">
                    <h3 className="text-xl md:text-2xl font-medium text-center text-gray-800 mb-6">Learn More About Our Space</h3>

                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src={youtube}
                            alt="Teacher working with student in classroom"
                            width={1000}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                                <Play className="w-6 h-6 text-white ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Map