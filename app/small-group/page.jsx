import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {smallGrp} from "@/data/features";
import BelievePar from "@/components/Belif/BelievePar";

const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/smallgroup.jpg" alt="smallgroups" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>You were made for relationship.</h2>
  </div>
  </div>
 <div className="flex flex-col items-center bg-white max-w-2xl mx-auto py-20">
        <div> <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-2'>Find Freedom Through Community</h2>
             <p className='text-center p-5 mx-auto text-black text-sm sm:text-base lg:text-lg'>Small Groups are gatherings of people that meet weekly to support each other and grow through relationship</p>
             <p className='text-center p-5 mx-auto text-black text-sm sm:text-base lg:text-lg'>Small Groups exist to help you develop community built on meaningful connection, encouragement, and spiritual growth. No matter your age, stage of life, or where you are in your journey with God, we want you to find freedom and take next steps.
                 Being supported by others makes all the difference. </p>
                 </div>
<div className="flex flex-wrap gap-4 p-4 items-center">
  <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer">
    Group Finder <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>

  <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer">
    Find A Youth Group <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>

  <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer">
    Lead A Group <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>
</div>
       </div>
  <div className="bg-[#f4f4f4] w-full lg:px-16 px-4 py-8 sm:py-8 lg:py-16">
      <h2 className="text-2xl  text-black text-center md:text-5xl py-3 font-bold lg:max-w-xl mx-auto">
    Small Group FAQs
      </h2>
 <BelievePar data={smallGrp} variant="light" />
   </div>
    <Footer />
    </>
  )
}

export default page