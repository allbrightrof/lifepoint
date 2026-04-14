'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import TestFeatures from "@/components/team/TestFeatures";
const EventCard = () => {
  

  return (
    <>
    <div className='w-full bg-black flex flex-col items-center justify-center p-3 sm:p-3 lg:p-12 gap-10'>
        <div className='text-white py-10 w-full px-4 sm:px-8 lg:px-20'>
    <p className='text-center font-bold text-2xl sm:text-3xl lg:text-3xl p-5'>Plan your Visit</p>
    <h2 className='text-center font-bold text-3xl sm:text-4xl lg:text-5xl p-5'>One Church, Many Rooms.</h2>
    <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>New here? Plan your visit to find service times, locations, and what to expect at a location near you! </p>
 </div>
<TestFeatures />
    <div className="w-full px-4 sm:px-8 lg:px-16 py-13 text-white flex  flex-col items-center">
       <Image src="/online.jpg" alt="online Events" width={400} height={300}/>
           <h2 className='text-center font-bold text-3xl text-white sm:text-3xl lg:text-3xl p-5'>Join Us Online</h2>
             <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>If you can’t be in the room, you can still be a part of what God is doing. Join us online for messages and worship from wherever you are.</p>
               <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>Sundays 10:00am, 1:00pm & 8:00pm</p>
    </div>
        </div>
    <div className="bg-[#ffffff] py-10 w-full px-4 sm:px-8 lg:px-20 flex flex-col items-end justify-center-s">
        <p className='p-5 max-w-3xl text-sm sm:text-base lg:text-lg text-black'>NextGen Ministry</p>
               <h2 className='text-center font-bold text-2xl text-black sm:text-3xl lg:text-4xl p-2'>For Kids and Teens</h2>
                       <p className='p-2 max-w-3xl text-sm sm:text-base lg:text-lg text-black'>From infants to high schoolers,
                         we’re passionate about creating safe, fun, and engaging environments where kids and teens can grow in their faith,
                         build meaningful friendships, and discover their purpose in Jesus.
                         Every age matters, and every week is designed with them in mind.</p>
            <div className="flex gap-4 text-[#bdbdbd]">
             <span className="cursor-pointer py-2 border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300">
  Kids Point
<FontAwesomeIcon icon={faArrowRight} className="text-[#bdbdbd]"/> </span>
                 <span className="cursor-pointer py-2 border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300">
  Youth
<FontAwesomeIcon icon={faArrowRight}  className="text-[#bdbdbd]"/> </span>
            </div>
    </div>
    </>
  )
}

export default EventCard