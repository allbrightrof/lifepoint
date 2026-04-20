import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BaptismSection from "@/components/Baptism/BaptismSection";
import { baptismDetails } from "@/data/features";
import {baptism} from "@/data/features";
import BelievePar from "@/components/Belif/BelievePar";

const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/baptism1.jpg" alt="our leadership" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Water Baptisim</h2>
  </div>
  </div>
 <div className="flex flex-col items-center bg-white max-w-2xl mx-auto py-20">
        <p className='text-center p-5 text-black mx-auto text-sm sm:text-base lg:text-lg'>Get Baptized</p>
         <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-2'>If you’ve made the decision to follow Jesus, water baptism is your next step.</h2>
             <p className='text-center p-5 mx-auto text-black text-sm sm:text-base lg:text-lg'>Following the example of Jesus, we practice full immersion water baptism,
               which symbolizes His death and resurrection. Being baptized publicly identifies us with Jesus,
               signifying that we have died to our own way of living and have been raised to life in Him. </p>
             <p className='text-center p-5 mx-auto text-black text-sm sm:text-base lg:text-lg'>If you are interested in learning more, select your campus below and a member of our team will reach out to you. </p>
       </div>
    <BaptismSection data={baptism}/>
    <div className="relative w-full h-96">
  <Image
    src="/baptisim2.jpg"
    alt="baptism"
    fill
    className="object-cover"
  />


  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/40">

    <h2 className="text-2xl md:text-5xl font-bold lg:max-w-xl">
      Interested in at-home Water Baptism?
    </h2>

    <p className="mt-4 max-w-2xl text-sm md:text-lg">
      While water baptism is offered at all Lifepoint locations, we understand
      our in-person experiences are not an option for everyone. To help you take
      this step wherever you are, we have answered some frequently asked questions below.
    </p>
  </div>
</div>
<div className="bg-[#f4f4f4] w-full lg:px-16 px-4 py-8 sm:py-8 lg:py-16">
    <h2 className="text-2xl  text-black text-center md:text-5xl py-3 font-bold lg:max-w-xl mx-auto">
     Water Baptism FAQs
    </h2>
 <BelievePar data={baptismDetails} variant="dark" />
 </div>
    <Footer />
    </>
  )
}

export default page