'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BelievePar from "@/components/Belif/BelievePar";
import TestFeatures from "@/components/team/TestFeatures";
import { given } from "@/data/features";
import { givingCard } from "@/data/features";
const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image src="/giving.jpg" alt="one" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
          <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Giving</h2>
  </div>
  </div>
<div className="grid grid-cols-1 gap-6 mt-10 bg-white">
  <div className="p-6 flex flex-col gap-4 max-w-2xl text-center mx-auto items-center">
    <h3 className="text-2xl font-bold lg:text-4xl text-black">See what God can do through your generosity.</h3>

    <p className="text-black text-xl">
Every act of generosity makes a difference—helping more people hear the Gospel, find hope, and take their next step in faith. Giving is simple and secure. 
You can give a one-time gift or set up recurring giving. Together, we’re building the Church and changing lives for eternity.
    </p>
        <button className="bg-[#8d8d8d] cursor-pointer font-bold px-5 py-3 text-white w-fit transition rounded-3xl">
      Give Online <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
    </button>
  </div>
</div>
<div className="bg-[#8d8d8d] p-8 lg:p-20 w-full">
     <BelievePar data={given}  variant="light" />
     </div>
   <div className='w-full bg-black flex flex-col items-center justify-center p-3 sm:p-3 lg:p-12 gap-10'>
        <div className='text-white py-10 w-full px-4 sm:px-8 lg:px-20'>
    <h2 className='text-center font-bold text-3xl sm:text-4xl lg:text-5xl p-5'>Ways To Give</h2>
    <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>We can achieve far more together than we can apart.  Partnering financially allows your generosity to travel places you may never go – advancing God’s Kingdom locally, nationally, and globally. Your giving not only meets physical and spiritual needs but develops and deploys leaders.  </p>
  <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>It’s easy, safe, and secure.</p>
 </div>
 <div>
<TestFeatures data={givingCard} />
    </div>
</div>
    <div className="py-12 px-4 md:px-10 lg:px-16 bg-white">

  <div className="text-center max-w-3xl mx-auto mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-black">
      Take a Next Step in Generosity
    </h2>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-black">
        What the Bible Says
      </h3>
      <p className="text-gray-700 leading-relaxed">
        The Bible teaches that generosity is worship and a response to God’s own generosity toward us. Jesus reminds us that giving reveals where our hearts are, so we choose to store up treasure in heaven by living with open hands here and now. (2 Corinthians 9:7–11; Matthew 6:19–21; Proverbs 3:9; Deuteronomy 15:7–11)
      </p>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-black">
        Trust God in your Finances
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Tithing is a biblical principle that means the tenth. The first tenth, which belongs to God, is Holy and set apart for Him. When we bring our tithe to God, it means that we trust and acknowledge that He’s the giver of every good thing in our lives. Tithing isn’t as much about finances as it is about faith.
      </p>
       <button
      className="bg-[#8d8d8d] text-white px-4 self-center w-fit py-2 rounded-full"
    >
    Commit To Thitting
    </button>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-black">
        Giving Beyond the Tithe
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Our offerings extend beyond the obedience of tithing; they reflect a life characterized by generosity. We believe there is a divine purpose tied to generosity, which is why we invite our church family to give beyond the tithe through various opportunities throughout the year, such as Heart for the House.
      </p>
    </div>
  </div>
</div>
   <div className="lg:py-15 py-13 px-2 w-full bg-white flex flex-col gap-4 max-w-2xl items-center mx-auto">
  <h3 className="lg:text-5xl text-2xl text-black font-bold max-w-3xl text-center">
    Want to know more about how your giving is making a difference?
  </h3>

  <button className="bg-[#8d8d8d] text-white px-4 py-2 rounded-full w-fit">
    2025 Annual Report <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>
</div>
  <div className="lg:p-15 p-7 flex flex-col gap-4 items-center bg-[#f4f4f4] text-black w-full">
    <h3 className="lg:text-4xl text-2xl font-bold">How can we pray for you?</h3>

    <p className="text-black text-xl max-w-2xl">
    Your generosity is making room for more people to encounter Jesus. If you have a prayer request, we would be honored to pray with you. 
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