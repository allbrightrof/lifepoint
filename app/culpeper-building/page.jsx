'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {buildingGrp} from "@/data/features";
import { buildingValue} from "@/data/features";
import BelievePar from "@/components/Belif/BelievePar";
import ValuesSection from "../../components/Value/ValueSection";
  
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/building.jpg" alt="Culpepe-building" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
          <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Culpeper Building</h2>
  </div>
  </div>
 
  <div className="grid grid-cols-1 gap-6 lg:mt-10 bg-white sm:py-3 lg:py-10">
  <div className="p-6 sm:py-5 flex flex-col gap-4 max-w-2xl text-center mx-auto items-center">
    
    <h3 className="text-2xl font-bold lg:text-5xl text-black">We exist to lead people <br/> far from God into <br/>a full life in Christ.
</h3>

    <p className="text-black text-xl">
Interested in knowing more about how the Culpeper build-out is coming along? 
This page will contain regular updates throughout the entire process.
    </p>
    
    <p className="text-black text-xl">
Thank you for your passion towards this project and interest in giving in order to see all God wants to do in this community come to fruition.
 Click the link below to give directly towards the Culpeper Construction Project today!
    </p>
        <button className="bg-[#8d8d8d] cursor-pointer font-bold px-5 py-3 text-white w-fit transition rounded-3xl">
      Give Now <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
    </button>
  </div>
</div>
  <div className="bg-[#f4f4f4] w-full lg:px-16 px-4 py-8 sm:py-8 lg:py-10">
      <h2 className="text-2xl  text-black text-center md:text-5xl py-3 font-bold lg:max-w-xl mx-auto">
Progress & Milestones
      </h2>
 <BelievePar data={buildingGrp} variant="light" />
   </div>
       <div className="bg-black text-white py-5">
        <div className="flex flex-col items-center py-4 max-w-2xl mx-auto ">
       <h2 className='text-center font-bold text-xl sm:text-xl lg:text-5xl'>Building Highlights</h2>
             <p className='text-center mx-auto  text-sm sm:text-base lg:text-lg py-3'>Explore key features of our campus designed to create a welcoming, functional, and Christ-centered environment for all.</p>
                </div>
                <div className="p-2">
                 <ValuesSection data={buildingValue}/>
                 </div>
     </div>
       <Image src="/culbuild.jpg" alt="Culpepe-building" width={400} height={300} className="w-full h-full" />
    <Footer />
    </>
  )
}

export default page