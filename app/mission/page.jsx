import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import BelievePar from "@/components/Belif/BelievePar"
import BeliefCard from "@/components/Belif/BeliefCard"
import ValuesSection from "../../components/Value/ValueSection";
import EvtPict from "../../components/evnt/EvtPict"
import { beliefDetails } from "@/data/features";
const Page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
               <Image src="/missions.jpg" alt="our beliefs" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
               <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
                <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Our Beliefs & Mission</h2>
         </div>
         </div>
    <div className="flex flex-col items-center bg-white max-w-2xl mx-auto">
        <p className='text-center p-5 text-black mx-auto text-sm sm:text-base lg:text-lg'>Our Mission</p>
         <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-3xl p-2'>We Exist to Lead People far From God into a Full Life in Christ.</h2>
             <p className='text-center p-5 mx-auto text-black text-sm sm:text-base lg:text-lg'>At Lifepoint, we believe you were created on purpose for a purpose, and that God has a unique design for your life.  God wants you to know Him, find freedom, discover your purpose, and make a difference in the lives of others. This is living fully alive. 
                Our goal is to help everyone take next steps on this spiritual pathway, no matter their starting point.</p>
       </div>
        <div className="flex flex-col items-center bg-white max-w-2xl mx-auto">
         <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-3xl p-5'>Our Statements of Faith</h2>
             <p className='text-center p-5 mx-auto text-black text-sm sm:text-base lg:text-lg'>Our beliefs are rooted in Scripture and describe
                 how we view God, 
                Jesus, humanity, the Bible, and God’s redemptive work in the world.</p>
                  <p className='text-center p-5 text-black mx-auto text-sm sm:text-base lg:text-lg'>Whether you have a deep relationship with God or are curious, 
                    come experience a service and feel free to ask questions. </p>
       </div>
<BeliefCard/>
   <div className="bg-white">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>What We Believe</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>At Lifepoint Church, we believe in the life-changing power of Jesus Christ 
                and hold to the truth of God’s Word as our foundation for faith, hope, and purpose.</p>
                </div>
    <BelievePar data={beliefDetails} />
     </div>
    <div className="bg-[#8d8d8d] overflow-hidden py-6 my-5 ">
  <div className="flex whitespace-nowrap animate-marquee">
    <span className="text-white text-2xl lg:text-4xl mx-10">Know God</span>
    <span className="text-white text-2xl lg:text-4xl mx-10">Find Freedom</span>
    <span className="text-white text-2xl lg:text-4xl mx-10">Discover Purpose</span>
    <span className="text-white text-3xl lg:text-4xl mx-10">Make A Difference</span>

    <span className="text-white text-2xl lg:text-4xl mx-10">Know God</span>
    <span className="text-white text-2xl lg:text-4xl mx-10">Find Freedom</span>
    <span className="text-white text-2xl lg:text-4xl mx-10">Discover Purpose</span>
    <span className="text-white text-2xl lg:text-4xl mx-10">Make A Difference</span>
  </div>
</div>
  <div className="bg-[#f4f4f4]">
 <div className="flex flex-col items-center max-w-2xl mx-auto pt-10">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>What We Believe</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>At Lifepoint Church, we believe in the life-changing power of Jesus Christ 
                and hold to the truth of God’s Word as our foundation for faith, hope, and purpose.</p>
                </div>
<ValuesSection/>
  <div className="w-full bg-white px-4 sm:px-8 lg:px-16 py-13 text-black flex flex-col md:flex-row lg:flex-row items-center justify-center gap-3">
        <div className="full max-w-6xl flex flex-col items-start">
           <h6 className=' font-bold text-xs text-black sm:text-xl lg:text-xl p-5'>Senior Pastors</h6>
          <h2 className='font-bold text-xs text-black sm:text-3xl lg:text-5xl p-5'>Shawn & <br />Jennifer McGill</h2>
               <p className='p-5 max-w-3xl text-black mx-auto text-sm sm:text-base lg:text-lg'>Pastors Shawn & Jennifer McGill serve as the Senior Pastors of Lifepoint Church, leading with a deep love for Jesus, a steady commitment to His Word, and a passion to see lives changed by the Gospel. Their lives are marked by a surrendered “yes” to God and a desire to build His Church for His glory. In 2025, through a Spirit-led process and with the full blessing of Lifepoint’s Founding Pastors, Board of Overseers, and Board of Directors, Shawn and Jennifer stepped in to lead the church. They carry the vision and heart of Lifepoint forward with humility, strength, and full confidence in the faithfulness of Jesus.</p>
        <button className="flex items-center gap-2 bg-[#8d8d8d] text-white font-bold px-4 py-3 rounded-3xl cursor-pointer w-auto">
    More About Shawn And Jennifer
  </button>
        </div>
        <div>
                  <Image src="/shawnjen.jpg" alt="shawnjen" width={800} height={800}/>
                  </div>
    </div>
<EvtPict/>

</div>
  <Footer />
    </>
  )
}

export default Page