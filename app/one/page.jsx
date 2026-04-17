'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {mediaOne} from "@/data/features";
import EvtPict from "@/components/evnt/EvtPict";
import TwoSection from "@/components/salvation/TwoSection";
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/one1.jpg" alt="one" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>For the One.</h2>
         <p className='p-5 max-w-7xl text-white mx-auto text-sm sm:text-base lg:text-lg'>We exist for one reason. So people far from God can find full life in Christ.</p>
       <button className="flex items-center gap-2 bg-white text-black px-4 py-3 rounded-3xl cursor-pointer w-auto">
    Register And Join The Team <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-black" />
  </button>
  </div>
  </div>
   <div className="bg-white p-9 lg:p-15">
           <h2 className='text-center font-bold text-black text-3xl sm:text-4xl lg:text-4xl'>Who is your one?</h2>
         <p className='p-5 max-w-2xl text-center text-black mx-auto text-sm sm:text-base lg:text-lg'>This year, we are asking a simple question: Who is your one? One neighbor.
             One coworker. One family member. One friend.</p>
              <p className='p-5 max-w-2xl text-center text-black mx-auto text-sm sm:text-base lg:text-lg'>A simple invitation can change one person eternity.</p>
  </div>
  <div className="w-full p-2 bg-white">
 <TwoSection
  title="Your Part Matters"
  text3="Salvations don't happen by accident. They happen when we stay focused on the One. So let’s invite with faith and leave the outcome to God."
  image="/one2.jpg"
/>

<TwoSection
  title="How to Invite"
  text3="Keep it simple: You do not need the perfect words. You just need a real invitation."
  text4="Offer a clear next step: People say yes more often when the plan is clear."
  text5="Follow up: If they say maybe, keep the door open."
  image="/one3.jpg"
  reverse={true}
/>
 <TwoSection
  title="Invite Tips"
  text3="Invite them to sit with you, not just to attend. Keep your words simple and normal. Make their first visit easy by handling the details, like where to park, where to meet, and where to sit. Then celebrate every step they take toward Jesus."
  image="/one4.jpg"
/>
</div>
<EvtPict evenData={mediaOne} />

   <div className="flex flex-col items-center bg-[#f4f4f4] w-full mx-auto">
       <h2 className='text-centermax-w-2xl  font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>Vision Sunday</h2>
             <p className='text-center max-w-2xl p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>On Vision Sunday, Pastor Shawn shared a clear vision for the next 20 years. We are believing God to reach one out of every hundred people in Virginia and the Louisville metro area. At the core of that vision is a heart for evangelism. 
                Jesus still changes lives, and He still sends His Church to go and make disciples.</p>
                
                <div className="w-full max-w-6xl py-20 p-3 mx-auto">
  <iframe
    className="w-full h-64 sm:h-80 md:h-96 rounded-2xl"
    src="https://www.youtube.com/embed/bphnfGArLJ0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
                </div>
    <Footer />
    </>
  )
}

export default page