import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamFeature from "../../components/team/TeamFeature";
import { beliefs } from "@/data/features";
import BeliefCard from "@/components/Belif/BeliefCard"
import {kidsPts} from "@/data/features";
import BelievePar from "@/components/Belif/BelievePar";
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
   <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/kid1.jpg" alt="smallgroups" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Kidspoint</h2>
  </div>
  </div>
    <div className="bg-[#f5f5f5] p-8 lg:p-15">
           <h2 className='text-center font-bold text-black text-2xl sm:text-4xl lg:text-5xl'>Nurturing Kids Faith with <br/>Jesus-Centered Experiences</h2>
         <p className='p-5 max-w-2xl text-center text-black mx-auto text-sm sm:text-base lg:text-lg'>We help kids develop a genuine, active, and passionate relationship with Jesus, creating safe, relational, and Jesus-centered
             experiences for your children to learn about God on a level they can understand. </p>
              <p className='p-3 max-w-2xl text-center text-black mx-auto text-sm sm:text-base lg:text-lg'>Our Kidspoint environments are available at all locations. Visit our Locations page for more information, 
                and check out the list of at-home parent resources below. </p>
  </div>
   <div className="bg-[#f4f4f4] py-5 w-full px-4 sm:px-8 lg:px-16 "> 
  <TeamFeature group="kid" />
</div>
<div className="bg-white py-16 px-4 flex flex-col items-center text-center gap-6">

<div className="w-full max-w-3xl">
  <Image
    src="/kid5.jpg"
    alt="Kids journey"
    width={1200}
    height={700}
    className="w-full h-auto rounded-2xl object-cover"
  />
</div>
  <p className="text-black text-sm sm:text-base lg:text-lg max-w-xl">
    An exciting three-day journey designed to help your child 
    know God more and grow deeper in their faith.
  </p>

  <button className="bg-[#45c4a7] text-white px-6 py-3 rounded-3xl hover:opacity-90 transition">
    Learn More
  </button>
</div>
 <div className="bg-[#f4f4f4]">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
       <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>Kidspoint Values</h2>
             <p className='text-center p-5 mx-auto  text-black text-sm sm:text-base lg:text-lg'>Our values guide everything we do—we prioritize safety, build lasting relationships, teach God truth in age-appropriate ways,        and create fun, engaging experiences that point every child to Jesus.</p>
                </div>
                <BeliefCard data={beliefs}/>
     </div>
      <div className="bg-[#8d8d8d]">
        <div className="flex flex-col items-center max-w-2xl mx-auto text-white">
       <h2 className='text-center font-bold text-white text-xl sm:text-xl lg:text-5xl p-5'>More About Kidspoint</h2>
             <p className='text-center p-5 mx-auto  text-white text-sm sm:text-base lg:text-lg'>At Lifepoint Church, we believe in the life-changing power of Jesus Christ 
                and hold to the truth of Gods Word as our foundation for faith, hope, and purpose.</p>
                </div>
               <BelievePar data={kidsPts} variant="light"/>
     </div>
    <Footer />
    </>
  )
}

export default page