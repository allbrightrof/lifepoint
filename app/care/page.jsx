'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
   <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/care.jpg" alt="one" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-5xl p-5'>We’re Here for You.</h2>
         <p className='p-5 max-w-7xl text-white mx-auto text-sm sm:text-base lg:text-lg'>When life feels overwhelming, and hope seems far away, you are not alone.
             God is close to the brokenhearted, and there are people ready to listen, pray, and walk with you toward safety and peace. These resources are available around the clock to provide help in your time of need.
             If you or someone you know is facing an emergency, please reach out to the contacts below.</p>
  </div>
  </div>
   <div className="bg-white p-6 lg:p-15">
           <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-4xl'>Crisis & Immediate Help</h2>
           <h3 className='p-5 max-w-2xl font-bold text-black mx-auto text-sm sm:text-base lg:text-lg'>Quick Contacts:</h3>
         <ul className=" list-none p-5 max-w-2xl font-semibold text-black mx-auto text-sm">
  <li><span className="font-semibold text-sm sm:text-base lg:text-lg">Emergency Services:</span> Dial 911</li>
  <li><span className="font-semibold text-sm sm:text-base lg:text-lg">Suicide & Crisis Lifeline:</span> Dial 988 | 988.lifeline.org</li>
  <li><span className="font-semibold mx-auto text-sm sm:text-base lg:text-lg">Crisis Text Line:</span> Text HOME to 741741</li>
  <li><span className="font-semibold  text-sm sm:text-base lg:text-lg">Encompass Crisis Line:</span> (540) 825-5656 (Option 7) or (540) 617-0774</li>
  <li><span className="font-semibold  text-sm sm:text-base lg:text-lg">National Domestic Violence Hotline:</span> (800) 799-7233</li>
  <li><span className="font-semibold  text-sm sm:text-base lg:text-lg">SAFE (Abuse Services):</span> (800) 825-8876</li>
  <li><span className="font-semibold text-sm sm:text-base lg:text-lg">Veterans Crisis Line:</span> Dial 988, then press 1 or text 838255</li>
</ul>
  </div>
      <div className="relative w-full h-90">

  <Image
    src="/care2.jpg"
    alt="baptism"
    fill
    className="object-cover"
  />


  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/40">

    <h2 className="text-2xl md:text-5xl font-bold lg:max-w-xl">
    How can we help?
    </h2>

    <p className="mt-4 max-w-2xl text-sm md:text-lg">
  Get  Community Support and Prayer When You Need It.
    </p>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 bg-white">

  <div className="p-6 flex flex-col gap-4 items-center">
    <h3 className="text-2xl font-bold text-black">Community Resources</h3>

    <p className="text-black text-xl">
      Text LCCARE to 94-000 or click the button below to download a copy and keep it handy whenever you need it.
    </p>

      <button className="bg-[#8d8d8d] px-5 py-3 font-bold text-white w-fit transition rounded-3xl">
      Download Resource
    </button>
  </div>

  <div className="p-6 flex flex-col gap-4 items-center">
    <h3 className="text-2xl font-bold text-black">Need Prayer</h3>

    <p className="text-black text-xl">
      Text LCCARE to 94-000 or click the button below to download a copy and keep it handy whenever you need it.
    </p>

    <button className="bg-[#8d8d8d] px-5 py-3 font-bold text-white w-fit transition rounded-3xl">
      Download Resource
    </button>
  </div>
</div>
  <div className="p-6 flex flex-col gap-4 items-center bg-white">
    <h3 className="text-2xl font-bold">Benevolence</h3>

    <p className="text-black text-xl max-w-2xl">
     Lifepoint Church provides care and support to church members facing unexpected life events or family crises.
      Benevolence offers short-term assistance during a season of need while helping individuals move toward long-term stability.
       Financial assistance is one form of support, alongside financial education through Financial Peace University,
        a short-term Group focused on building healthy financial habits. Benevolence assistance is available to those actively connected to Lifepoint Church through a Group and or serving on a Dream Team. Benevolence assistance does not include help with motel or hotel expenses,
      cable bills, cell phone bills, credit card debt, storage unit fees, or any type of taxes.
    </p>

    <button className="bg-[#8d8d8d] px-5 py-3 text-white w-fit transition rounded-3xl">
      Download Resource
    </button>
  </div>
    <Footer />
    </>
  )
}

export default page