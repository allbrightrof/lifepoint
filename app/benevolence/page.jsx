'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/care.jpg" alt="one" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Benevolence</h2>
         <p className='p-5 max-w-7xl text-white mx-auto text-xl sm:text-base lg:text-lg'>Lifepoint Church offers short-term benevolence support for church members facing unexpected life events or family crises..</p>
  </div>
  </div>
<div className="grid grid-cols-1 gap-6 mt-10 bg-white justify-items-center">

  <div className="p-6 flex flex-col gap-4 max-w-2xl text-center">
    <h3 className="text-2xl font-bold text-black">Community Resources</h3>

    <p className="text-black text-xl">
    Lifepoint Church is committed to providing care and support to church members who experience unexpected life events or family crises.
     Benevolence is intended to offer short-term assistance during a season of need, while also helping individuals.
    </p>

    <p className="text-black text-xl">
    Financial assistance is one way we provide support. An equally important part of our benevolence ministry is financial education. 
    We encourage those seeking assistance to participate in Financial Peace University,
     a short-term Group designed to help individuals build healthy financial habits and move toward lasting independence.
    </p>
  </div>

  <div className="p-6 flex flex-col gap-4 max-w-2xl text-center text-black">
    <h3 className="text-2xl font-bold text-black">Eligibility</h3>

    <p className="text-black text-xl">
     Benevolence assistance is available to individuals who are actively connected to Lifepoint Church through participation in a group and/or serving on a Dream Team.
    </p>
  </div>
 <div className="p-6 flex flex-col gap-4 max-w-2xl text-center">
    <h3 className="text-2xl font-bold text-black">Assistance Limitations</h3>

    <p className="text-black text-xl">
    Benevolence assistance does not include help with motel or hotel expenses, cable bills, cell phone bills, credit card debt, storage unit fees, or any taxes. 
    </p>
  </div>
    <div className="p-6 flex flex-col gap-4 max-w-2xl text-center">
    <h3 className="text-2xl font-bold text-black">Expectations</h3>

    <p className="text-black text-xl">
  All benevolence requests are handled with care and prayerful consideration. 
  Applicants are expected to engage respectfully throughout the process. Requests involving manipulative,
   deceitful, dishonest, demanding, or abusive behavior will not be eligible for financial assistance.
    </p>

    <p className="text-black text-xl">
   If you are walking through a season of need, we encourage you to reach out. Our heart is to come alongside you with wisdom, care, and practical support.
    </p>  <button
      className="bg-black text-white px-5 self-center w-fit py-3 rounded-full font-bold"
    >
     Benevolence Request
    </button>

  </div>
</div>
    <Footer />
    </>
  )
}

export default page