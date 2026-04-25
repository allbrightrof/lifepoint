'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SixFeature from "../../components/sixTeam/SixFeature";
import TeamFeature from "../../components/team/TeamFeature";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import EvtPict from "@/components/evnt/EvtPict";
import {morePic} from "@/data/features";

const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/richmond.jpg" alt="one" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
         <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Richmond Campus</h2>
  </div>
  </div>
  <div className="grid grid-cols-1 gap-6 mt-10 bg-white sm:py-py-3 lg:py-10">
  <div className="p-6 flex flex-col gap-4 max-w-2xl text-center mx-auto items-center">
    
    <p className="text-black text-xl">
Welcome
    </p>
    <h3 className="text-2xl font-bold lg:text-5xl text-black">Its not a coincidence <br/> that you found this page.</h3>

    <p className="text-black text-xl">
However you landed here, we’re glad you did. Whether you’re looking for a church to call home or are just ready to try something new,
 we hope you’ll join us at Lifepoint Church. Lifepoint Fredericksburg is one Campus, meeting in two locations:
    </p>
        <button className="bg-[#8d8d8d] cursor-pointer font-bold px-5 py-3 text-white w-fit transition rounded-3xl">
      Get Directions <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
    </button>
  </div>
</div>
   <div className="bg-[#f4f4f4] lg:py-20 p-4">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl'>Who We Are</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>Lifepoint Culpeper is one of six Lifepoint Church locations throughout the state of Virginia and Kentucky.
               We exist so that people far from God will become fully alive in Christ. </p>
                </div>
                 <SixFeature group="frederick"/>
     </div>
                      <div className="bg-black lg:py-20 p-4">
                         <div className="flex flex-col items-center max-w-2xl mx-auto">
                           <h2 className='text-center font-bold text-white text-xl sm:text-xl lg:text-5xl'>Campus Staff</h2>
                             <p className='text-center p-5 mx-auto  text-white text-sm sm:text-base lg:text-lg'>Our campus staff are passionate leaders who serve each location with care,
                               helping you feel connected, supported, and at home.</p>
                           <Link href="/kidspoint"><span className="cursor-pointer text-white font-bold border-b-2 border-white hover:border-transparent transition-all duration-300">
  Contact Our Team
<FontAwesomeIcon icon={faArrowRight} className="text-white"/> </span> </Link> 
                </div>
                 <TeamFeature group="richmond"/>
                 </div>
                  <EvtPict evenData={morePic}/>
    <Footer />
    </>
  )
}

export default page