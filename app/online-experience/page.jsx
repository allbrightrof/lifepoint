import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { experience } from "@/data/features";
import BeliefCard from "@/components/Belif/BeliefCard"
const Page = () => {
  return (
    <>
    <Navbar variant="white" />
      <div className='w-full bg-[#f4f4f4] flex flex-col items-center justify-center p-3 sm:p-3 lg:p-12 gap-3'>
       <div className='text-black py-6 pt-20 w-full px-4 sm:px-8 lg:px-20'>
    <h2 className='text-center font-bold text-3xl sm:text-4xl lg:text-5xl p-5'>Online Experience</h2>
       <p className='text-center text-black max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>If you cant be in the room, you can still be a part of what God is doing.
         Join us online for messages and worship from wherever you are.</p>
 </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-2xl justify-items-center">
  
  <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-6 font-bold py-4 rounded-4xl w-fit">
    Watch Live <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>

  <button className="flex items-center gap-2 bg-[#8d8d8d] font-bold text-white px-4 py-2 rounded-4xl w-fit">
    Join The Team <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>

  <button className="flex items-center gap-2 bg-[#8d8d8d] font-bold text-white px-6 py-4 rounded-4xl w-fit lg:col-span-2">
    KidsPoint YouTube Channel <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>

</div>
     </div>
           <BeliefCard data={experience} />
    <Footer />
    </>
  )
}

export default Page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       