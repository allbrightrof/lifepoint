'use client'
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { eventsTrips } from "@/data/features";
import ReachPar from "@/components/reach/ReachPar";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [selectedName, setSelectedName] = useState("all");

  const filteredData = eventsTrips.filter((item) => {
    const groupMatch =
      selectedGroup === "all" || item.group === selectedGroup;

    const nameMatch =
      selectedName === "all" || item.name === selectedName;

    return groupMatch && nameMatch;
  });

  return (
    <>
      <Navbar variant="transparent" />
     <div className="relative w-full min-h-[90vh] sm:min-h-screen">
        <Image
          src="/eventpic1.jpg"
          alt="one"
          width={400}
          height={300}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
          <h2 className="text-white text-5xl font-bold">Events</h2>
        </div>
      </div>

      <div className="bg-white w-full p-8">
        <h2 className="text-center font-bold text-black text-4xl mb-6">
          Upcoming Events
        </h2>

<div className="flex flex-col sm:flex-row justify-center w-full gap-4 mb-6">

  <select
    onChange={(e) => setSelectedGroup(e.target.value)}
    className="w-full sm:w-1/2 px-5 py-6 bg-white text-black 
    border-4 border-black rounded-none outline-none"
  >
    <option value="all">All Groups</option>
    <option value="campus">Campus</option>
    <option value="city">City</option>
    <option value="global">Global</option>
  </select>

  <select
    onChange={(e) => setSelectedName(e.target.value)}
    className="w-full sm:w-1/2 px-5 py-6 bg-white text-black 
    border-4 border-black rounded-none outline-none"
  >
    <option value="all">All Names</option>
    <option value="The Journey Series">Journey Series</option>
    <option value="City Outreach">City Outreach</option>
    <option value="Global Experience">Global Experience</option>
  </select>

</div>

       <ReachPar data={filteredData} variant="events"  icon={ faLocationDot }/>
      </div>

      <Footer />
    </>
  );
};

export default Page;