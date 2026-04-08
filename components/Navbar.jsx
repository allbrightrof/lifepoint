'use client'
import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
const [aboutOpen, setAboutOpen] = useState(false);
const [nextStep, setNextStep] = useState(false);
const [nextGen, setNextGen] = useState(false);
const [events, setEvents] = useState(false);
const [care, setCare] = useState(false);
const [give , setGive] = useState(false);
const [sermon , setSermon] = useState(false);
const [home , setHome] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [mobileAbout, setMobileAbout] = useState(false);
const [mobileNextStep, setMobileNextStep] = useState(false);
const [mobileNextGen , setMobileNextGen] = useState(false);
const [mobileEvents , setMobileEvents] = useState(false);
const [mobileCare , setMobileCare] = useState(false);
const [mobileGive, setMobileGive] = useState(false);
const [mobileSermon, setMobileSermon] = useState(false);
const [mobileHome,setMobileHome] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 ">
      <div className=" flex md:flex mx-auto max-w-6xl justify-between pt-10 pb-5 bg-transparent text-white border-b border-white/30">
            <div className="text-xl font-bold mx-auto">
               <Image src="/life-church.jpg" alt="Logo" width={200} height={200} loading="eager"/>
                </div>
            <div className="space-x-4 hidden sm:hidden md:hidden lg:flex gap-8">
                
  <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
 <a
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  About
</a>

  {aboutOpen && (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

      <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Locations</a>
        <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">  Leadership</a>
        <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Our Beliefs</a>
            <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Our Missions</a>
      </div>
    </div>
  )}
</div>

    <div className="relative" onMouseEnter={() => setNextStep(true)} onMouseLeave={() => setNextStep(false)}>
 <a
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
    Next Step
</a>

  {nextStep && (
    <div className="absolute left-0 top-full pt-2">
      
    
      <div className="h-2"></div>

      <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Salvation</a>
        <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">  Water Baptism</a>
        <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100"> Join The Team</a>
         <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Small Groups</a>
         <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Outreach</a>
          <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">For The One</a>
      </div>
    </div>
  )}
</div>
                  <div className="relative" onMouseEnter={() => setNextGen(true)} onMouseLeave={() => setNextGen(false)}>
 <a
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
    Next Gen 
</a>

  {nextGen&& (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

 
      <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Kids Point</a>
        <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100"> Youth Group</a>
        <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Life Point Challenge</a>
      </div>
    </div>
  )}
</div>
             <div className="relative" onMouseEnter={() => setEvents(true)} onMouseLeave={() => setEvents(false)}>
  <a
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Events
</a>

  {events&& (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

        <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Events First</a>
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Events Second</a>
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Events Third</a>
      </div>
    </div>
  )}
</div>
                      <div className="relative" onMouseEnter={() => setCare(true)} onMouseLeave={() => setCare(false)}>
  <a href="/nextstep" className="hover:underline cursor-pointer py-2">Care</a>

  {care&& (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

       <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Care</a>
        <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Prayer Request</a>
        <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Benovelence</a>
      </div>
    </div>
  )}
</div>
               <div className="relative" onMouseEnter={() => setGive(true)} onMouseLeave={() => setGive(false)}>
 <a
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Give
</a>

  {give && (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

    <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
        <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Give</a>
        <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Give Request</a>
        <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Prayer</a>
      </div>
    </div>
  )}
</div>
               <div className="relative" onMouseEnter={() => setSermon(true)} onMouseLeave={() => setSermon(false)}>
  <a
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
    Sermons
</a>

  {sermon&& (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

  <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
         <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Sermons</a>
        <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Watch Live</a>
      </div>
    </div>
  )}
</div>
         <div className="relative" onMouseEnter={() => setHome(true)} onMouseLeave={() => setHome(false)}>
  <a
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
    Home
</a>

  {home&& (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

    </div>
  )}
</div>

            </div>

     <div className="md:flex lg:hidden sm:flex flex z-50 pr-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
     <FontAwesomeIcon
  icon={mobileMenuOpen ? faTimes : faBars}
  className={`text-2xl cursor-pointer ${
    mobileMenuOpen ? "text-black" : "text-white"
  }`}
/>
    </div>
  {mobileMenuOpen && (
    <div className="md:flex lg:hidden sm:flex justify-between top-0 left-0 h-screen pt-20 fixed w-full bg-white text-black flex flex-col items-start">
    <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileAbout(!mobileAbout)}
  >
    <span>ABOUT</span>

   <FontAwesomeIcon
      icon={mobileAbout ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileAbout && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>
       <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileNextStep(!mobileNextStep)}
  >
    <span> Next Step</span>

   <FontAwesomeIcon
      icon={mobileNextStep ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileNextStep && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>
            <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileNextGen(!mobileNextGen)}
  >
    <span> Next Gen</span>

   <FontAwesomeIcon
      icon={mobileNextGen ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileNextGen && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>
            <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileEvents(!mobileEvents)}
  >
    <span> Events</span>

   <FontAwesomeIcon
      icon={mobileEvents ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileEvents && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>

     <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileCare(!mobileCare)}
  >
    <span> Care </span>

   <FontAwesomeIcon
      icon={mobileCare ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileCare && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>
     <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileGive(!mobileGive)}
  >
    <span>  Give </span>

   <FontAwesomeIcon
      icon={mobileGive ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGive && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>
     <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileSermon(!mobileSermon)}
  >
    <span> Sermons</span>

   <FontAwesomeIcon
      icon={mobileSermon ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileSermon && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>
     <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileHome(!home)}
  >
    <span>Home</span>

   <FontAwesomeIcon
      icon={mobileHome ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileHome && (
    <div className="pl-6 flex flex-col">
      <a href="/about/history" className="py-2">History</a>
      <a href="/about/team" className="py-2">Team</a>
      <a href="/about/contact" className="py-2">Contact</a>
    </div>
  )}

</div>
    </div>
  )

  }
        </div> 

    </nav>
  )
}

export default Navbar