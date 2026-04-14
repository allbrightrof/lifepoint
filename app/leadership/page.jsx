'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamFeature from "../../components/team/TeamFeature";

const page = () => {
  return (
    <>
    <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/leadership.jpg" alt="our leadership" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Our Leadership</h2>
       <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-2 rounded-3xl cursor-pointer w-auto">
    More About Us<FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>
  </div>
  </div>
    <div className="w-full px-4 sm:px-8 lg:px-16 py-13 text-black flex flex-col md:flex-row lg:flex-row items-center justify-center gap-3">
        <div className="full max-w-6xl flex flex-col items-start">
           <h6 className=' font-bold text-xs text-black sm:text-xl lg:text-xl p-5'>Senior Pastors</h6>
          <h2 className='font-bold text-xs text-black sm:text-3xl lg:text-5xl p-5'>Shawn & <br />Jennifer McGill</h2>
               <p className='p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>Pastors Shawn & Jennifer McGill serve as the Senior Pastors of Lifepoint Church, leading with a deep love for Jesus, a steady commitment to His Word, and a passion to see lives changed by the Gospel. Their lives are marked by a surrendered “yes” to God and a desire to build His Church for His glory. In 2025, through a Spirit-led process and with the full blessing of Lifepoint’s Founding Pastors, Board of Overseers, and Board of Directors, Shawn and Jennifer stepped in to lead the church. They carry the vision and heart of Lifepoint forward with humility, strength, and full confidence in the faithfulness of Jesus.</p>
        <button className="flex items-center gap-2 bg-[#8d8d8d] text-white font-bold px-4 py-3 rounded-3xl cursor-pointer w-auto">
    More About Shawn And Jennifer<FontAwesomeIcon icon={faArrowRight} className="w-auto h-3" />
  </button>
        </div>
        <div>
                  <Image src="/shawnjen.jpg" alt="shawnjen" width={800} height={800}/>
                  </div>
    </div>
     <div className="bg-[#f4f4f4] py-10 w-full px-4 sm:px-8 lg:px-16">
  <h2 className="font-bold text-center text-black text-xl sm:text-xl md:text-3xl lg:text-5xl">Directional Leadership Team</h2>
  <TeamFeature group="leadership" />
</div>
<div className="bg-white py-10 w-full px-4 sm:px-8 lg:px-16 "> 
 <h2 className="font-bold text-center text-black text-xl sm:text-xl md:text-3xl lg:text-5xl">Department Heads</h2>
  <TeamFeature group="department" />
</div>
 <div className="bg-[#f4f4f4] py-10 w-full px-4 sm:px-8 lg:px-16 "> 
  <h2 className="font-bold text-center text-black text-xl sm:text-xl md:text-3xl lg:text-5xl">Campus Pastors</h2>
  <TeamFeature group="campus" />
</div>
    <Footer />
    </>
  ) 
}

export default page