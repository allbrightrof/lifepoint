import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TestFeatures from '@/components/TestFeatures'
import Image from 'next/image'
const Page = () => {
  return (
    <>
    <Navbar variant="white" />
      <div className='w-full bg-[#f4f4f4] flex flex-col items-center justify-center p-3 sm:p-3 lg:p-12 gap-10'>
        <div className='text-black py-10 w-full px-4 sm:px-8 lg:px-20'>
    <p className='text-center font-bold text-2xl sm:text-3xl lg:text-3xl p-5'>Our Locations</p>
    <h2 className='text-center font-bold text-3xl sm:text-4xl lg:text-7xl p-5'>One Church, <br />Multiple Locations</h2>
 </div>  
     <TestFeatures variant="[#f4f4f4]" />
     </div>
       <div className="w-full px-4 sm:px-8 lg:px-16 py-10 text-black flex flex-col items-center ">
            <Image src="/online.jpg" alt="online Events" width={400} height={300}/>
                <h2 className='text-center font-bold text-3xl text-white sm:text-3xl lg:text-3xl p-2'>Join Us Online</h2>
                  <p className='text-center p-2 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>If you can’t be in the room, you can still be a part of what God is doing. Join us online for messages and worship from wherever you are.</p>
                    <p className='text-center p-2 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>Sundays 10:00am, 1:00pm & 8:00pm</p>
           <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-2 rounded-3xl cursor-pointer w-auto">
    Read More<FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>
         </div>
    <Footer />
    </>
  )
}

export default Page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       