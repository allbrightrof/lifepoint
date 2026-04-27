'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TeamFeature from "../../components/team/TeamFeature";
import EvtPict from "@/components/evnt/EvtPict";
import {morePictures} from "@/data/features";
import SixFeature from "../../components/sixTeam/SixFeature";
import Link from "next/link";
  
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/Culpeper.jpg" alt="Culpeper" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
          <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Culpeper Campus</h2>
  </div>
  </div>
 
  <div className="grid grid-cols-1 gap-6 lg:mt-10 bg-white sm:py-3 lg:py-10">
  <div className="p-6 sm:py-5 flex flex-col gap-4 max-w-2xl text-center mx-auto items-center">
    
    <p className="text-black text-xl">
Welcome
    </p>
    <h3 className="text-2xl font-bold lg:text-5xl text-black">Its not a coincidence <br/> that you found this page.</h3>

    <p className="text-black text-xl">
However you landed here, were glad you did. Whether youre
 looking for a church to call home or are just ready to try something new, we hope youll join us at Lifepoint Church.
    </p>
    
    <p className="text-black text-xl">
Lifepoint Culpeper meets every Sunday morning at 9:00am and 10:45am at Culpeper County High School.
    </p>
        <button className="bg-[#8d8d8d] cursor-pointer font-bold px-5 py-3 text-white w-fit transition rounded-3xl">
      Get Directions
    </button>
  </div>
</div>
    <div className="bg-[#f4f4f4] lg:py-20 py-12">
        <div className="flex flex-col items-center py-8 max-w-2xl mx-auto ">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>Campus Staff</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>At Lifepoint Church, we believe in the life-changing power of Jesus Christ 
                and hold to the truth of Gods Word as our foundation for faith, hope, and purpose.</p>
                     <Link href="/kidspoint"><span className="cursor-pointer text-[#8d8d8d] font-bold border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300">
  Contact Our Team
<FontAwesomeIcon icon={faArrowRight} className="text-[#bdbdbd]"/> </span> </Link> 
                </div>
                <div className="lg:p-10 p-2">
                 <TeamFeature group="campusstaff"/>
                 </div>
     </div>
         <div className="bg-[#ffffff] lg:py-20 p-4 sm:py-5">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl'>Who We Are</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>Lifepoint Culpeper is one of six Lifepoint Church locations throughout the state of Virginia and Kentucky.
               We exist so that people far from God will become fully alive in Christ. </p>
                </div>
                 <SixFeature group="leadership"/>
     </div>
             <div className="flex flex-col items-center w-full py-12 lg:py-15 bg-black">
       <h2 className='text-center font-bold text-white text-xl sm:text-xl lg:text-5xl p-5'>Culpeper Permanent <br/> Building Project</h2>
             <p className='text-center p-5 mx-auto  max-w-2xl text-white text-sm sm:text-base lg:text-lg'>Lifepoint Culpeper is one of six Lifepoint Church locations throughout the state of Virginia and Kentucky.
               We exist so that people far from God will become fully alive in Christ. </p>
                   <button className="bg-white mt-2 cursor-pointer font-bold px-5 py-3 text-black w-fit transition rounded-3xl flex items-center gap-2">
  Learn More
  <FontAwesomeIcon icon={faArrowRight} className="text-black" />
</button>
                </div>
                <EvtPict evenData={morePictures}/>
                  <div className="flex flex-col items-center w-full py-5 lg:py-10 bg-white">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-3xl p-5'>We believe prayer changes things. </h2>
             <p className='text-center p-5 mx-auto  max-w-2xl text-black text-whhite text-sm sm:text-base lg:text-lg'>No matter what you’re facing,
               our Campus team would love to pray for you. Let us know how we can be praying for you this week. </p>
                  <Link href="/prayerwall"> <button className="bg-[#8d8d8d] mt-2 cursor-pointer font-bold px-5 py-3 text-white w-fit transition rounded-3xl flex items-center gap-2">
Prayer Request
</button> </Link> 
                </div>
    <Footer />
    </>
  )
}

export default page