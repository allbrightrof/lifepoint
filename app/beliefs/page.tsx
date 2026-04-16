import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BeliefCard from "@/components/Belif/BeliefCard"
import BelievePar from "@/components/Belif/BelievePar"
import { baptismDetails } from "@/data/features";
import Image from "next/image";
const page = () => {
  return (
    <>
     <Navbar variant = "transparent" />
       <div className="relative w-full min-h-screen">
             <Image src="/beliefs.jpg" alt="our beliefs" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
             <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
              <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Our Beliefs</h2>
       </div>
       </div>
       <div className=" bg-white">
       <div className="flex flex-col items-center bg-white max-w-2xl mx-auto">
         <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>Our Statements of Faith</h2>
             <p className='text-center p-5 mx-auto text-black text-sm sm:text-base lg:text-lg'>Our beliefs are rooted in Scripture and describe
                 how we view God, 
                Jesus, humanity, the Bible, and God’s redemptive work in the world.</p>
                  <p className='text-center p-5 text-black mx-auto text-sm sm:text-base lg:text-lg'>Whether you have a deep relationship with God or are curious, 
                    come experience a service and feel free to ask questions. </p>
       </div>
       <div>
      <BeliefCard />
      </div>
      <div className="bg-[#f4f4f4]">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>What We Believe</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>At Lifepoint Church, we believe in the life-changing power of Jesus Christ 
                and hold to the truth of God’s Word as our foundation for faith, hope, and purpose.</p>
                </div>
     <BelievePar data={baptismDetails}/>
     </div>
    </div>
        <Footer />
    </>
  )
}

export default page