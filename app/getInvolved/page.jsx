'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {Involved} from "@/data/features";
import BaptismSection from "@/components/Baptism/BaptismSection";
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
   <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/getInvolved.jpg" alt="one" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
          <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Your Next Step Starts Here.</h2>
  </div>
  </div>
     <div className="bg-[#f5f5f5] p-8 lg:p-15">
           <h2 className='text-center font-bold text-black text-2xl sm:text-4xl lg:text-5xl'>Following Jesus is a <br/> journey, and there is <br/> always a next step to take.</h2>
         <p className='p-5 max-w-2xl text-center text-black mx-auto text-sm sm:text-base lg:text-lg'>We help kids develop a genuine, active, and passionate relationship with Jesus, creating safe, relational, and Jesus-centered
             experiences for your children to learn about God on a level they can understand. </p>
  </div>
<BaptismSection data={Involved} />
    <Footer />
    </>
  )
}

export default page