'use client';
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { teachingSeries } from "@/data/features";
import ReachPar from "@/components/reach/ReachPar";
import { faCalendarDays} from "@fortawesome/free-solid-svg-icons";
const Page = () => {
  const [selectedAsset, setSelectedAsset] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

const filteredGroup = teachingSeries.filter((item) => {
  const matchGroup =
    selectedAsset === "all" || item.group === selectedAsset;

  const matchSearch =
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

  return matchGroup && matchSearch;
});

  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-[90vh] sm:min-h-screen">
          <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dth0uegpp/video/upload/v1776419078/semonloop_bqnkq9.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Our Sermons</h2>
  </div>
  </div>   
        <div className="bg-white w-full p-3">
          <h2 className="text-center font-bold text-black text-4xl mb-6">
            Upcoming Events
          </h2>
  
<div className="flex flex-col sm:flex-row justify-center w-full gap-4 mb-6">

  <input
    type="text"
    placeholder="Search sermons..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full sm:w-1/2 px-5 py-4 bg-white text-black 
    border-4 border-black rounded-none outline-none"
  />
<div className="relative w-full sm:w-1/2">
  <select
    onChange={(e) => setSelectedAsset(e.target.value)}
    className="w-full px-5 py-4 h-60 bg-white text-black 
    border-4 border-black rounded-none text-xl leading-none outline-none appearance-none"
  >
    <option value="all">All</option>
    <option value="Alters">Alters</option>
    <option value="At the Movies">At the Movies</option>
    <option value="Come Together">Come Together</option>
    <option value="Moment With Jesus">Moment With Jesus</option>
    <option value="Nights Of Worship">Nights Of Worship</option>
    <option value="One Question At A Time">One Question At A Time</option>
    <option value="This Is A Move">This Is A Move</option>
    <option value="This is my story">This is my story</option>
  </select>

  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
    ▼
  </span>
</div>
</div>
        <ReachPar
  data={filteredGroup}
  variant="events"
  icon={faCalendarDays}
/>
        </div>                         
    <Footer />
    </>
  )
}

export default Page