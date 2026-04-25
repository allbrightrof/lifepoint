'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BeliefCard from "@/components/Belif/BeliefCard";
import {teamData} from "@/data/features";
import {media} from "@/data/features";
import EvtPict from "@/components/evnt/EvtPict"
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/dreamteam.jpg" alt="dreamteam" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
          <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Join the Team</h2>
         <p className='p-5 max-w-7xl text-white mx-auto text-sm sm:text-base lg:text-lg'>Discover what it means to make a difference through serving on a Dream Team at Lifepoint Church.</p>
       <button className="flex items-center gap-2 bg-white text-black px-4 py-3 rounded-3xl cursor-pointer w-auto">
    Register And Join The Team <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-black" />
  </button>
  </div>
  </div>
<div className="w-full py-10 px-4 sm:px-4 md:px-8 lg:px-16 bg-white text-black mx-auto flex flex-col items-center text-center">
  
  <p className="mt-4 max-w-2xl text-sm md:text-lg">
    Register for Join the Team <br />
    Join the Team is a 60-minute experience where you will learn more about your personality and discover the spiritual gifts God has placed in your life.
  </p>

  <p className="mt-4 max-w-2xl text-sm md:text-lg">
    Are you ready to take your next step and join the Dream Team? Join us for Join the Team at your local campus.
  </p>

  <button className="mt-6 flex items-center gap-2 bg-black text-white px-4 py-3 rounded-3xl cursor-pointer">
    Register And Join The Team 
    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-white" />
  </button>

</div>
<div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-black text-white flex flex-col items-center text-center">

  <h2 className="text-xl md:text-3xl font-semibold">
    What is the Dream Team?
  </h2>

  <p className="mt-4 max-w-2xl text-sm md:text-lg">
    The Dream Team is a passionate group of people who live out their purpose inside and outside the church walls.
  </p>

  <h2 className="mt-10 text-xl md:text-3xl font-semibold">
    What does the Bible say about serving?
  </h2>

  <p className="mt-4 max-w-2xl text-sm md:text-lg">
    The Dream Team is a passionate group of people who live out their purpose inside and outside the church walls.
  </p>
</div>
      <div className="bg-[#f4f4f4]">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>Explore the Teams</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>Every Dream Team serves in a different way, 
              but each one helps lead people far from God into a full life in Christ. 
              Take a look at the teams below and find the place that fits you best.</p>
                </div>
              <div>
                  <BeliefCard  data={teamData}/>
                  <EvtPict evenData={media}/>
                  </div>
                </div>
    <Footer />
    </>
  )
}

export default page