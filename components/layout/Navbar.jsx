'use client'
import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ variant = "transparent"}) => {
const [activeMenu, setActiveMenu] = useState(null);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [mobileGen ,setMobileGen] = useState(null);
  return (
<nav
  className={`top-0 left-0 w-full ${
    mobileMenuOpen ? "fixed z-50" : "absolute z-20"
  } ${
    variant === "transparent"
      ? "bg-transparent text-white"
      : "bg-white text-black"
  }`}
>
      <div className="flex md:flex mx-auto max-w-6xl justify-between pt-10 pb-5 border-b border-white/30">
            <div className="text-xl font-bold mx-auto">
              <Image
  src={variant === "transparent" ? "/life-church.jpg" : "/black-lifepoint.jpg"}
  alt="Logo"
  width={200}
  height={200}
  loading="eager"
/>
                </div>
            <div className="space-x-4 hidden sm:hidden md:hidden lg:flex gap-8">
                
  <div className="relative" onMouseEnter={() => setActiveMenu("about")} onMouseLeave={() => setActiveMenu(null)}>
<Link
  href="/"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  About
</Link>

  {activeMenu === "about" && (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

      <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
     <Link href="/locations" className="block px-4 py-2 hover:bg-gray-100">
  Locations
</Link>
    <Link href="/leadership" className="block px-4 py-2 hover:bg-gray-100">
  Leadership
</Link>
          <Link href="/beliefs" className="block px-4 py-2 hover:bg-gray-100">
  Our Beliefs
</Link>
            <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Our Missions</a>
      </div>
    </div>
  )}
</div>

    <div className="relative" onMouseEnter={() => setActiveMenu("nextstep")} onMouseLeave={() => setActiveMenu(null)}>
<Link
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Next Step
</Link>

  {activeMenu === "nextstep" && (
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
                  <div className="relative" onMouseEnter={() => setActiveMenu("nextgen")} onMouseLeave={() => setActiveMenu(null)}>
<Link
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Next Gen
</Link>
  {activeMenu=== "nextgen" && (
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
             <div className="relative" onMouseEnter={() => setActiveMenu("events")} onMouseLeave={() => setActiveMenu(null)}>
<Link
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Events
</Link>

  {activeMenu=== "events" && (
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
                      <div className="relative" onMouseEnter={() => setActiveMenu("care")} onMouseLeave={() => setActiveMenu(null)}>
 <Link
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Care
</Link>

  {activeMenu === "care" && (
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
               <div className="relative" onMouseEnter={() => setActiveMenu("give")} onMouseLeave={() => setActiveMenu(null)}>
<Link
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Give
</Link>

  {activeMenu === "give" && (
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
               <div className="relative" onMouseEnter={() => setActiveMenu("sermons")} onMouseLeave={() => setActiveMenu(null)}>
<Link
  href="/about"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Sermons
</Link>

  {activeMenu=== "sermons" && (
    <div className="absolute left-0 top-full pt-2">
      
      <div className="h-2"></div>

  <div className="bg-white text-black shadow-lg min-w-max p-3 font-bold border rounded-lg border-white">
         <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Sermons</a>
        <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Watch Live</a>
      </div>
    </div>
  )}
</div>
         <div className="relative" onMouseEnter={() => setActiveMenu("home")} onMouseLeave={() => setActiveMenu(null)}>
<Link
  href="/home"
  className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white/500 transition-all duration-300"
>
  Home
</Link>

  {activeMenu === "home" && (
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
   mobileMenuOpen
      ? "text-black"
      : variant === "transparent"
      ? "text-white"
      : "text-black"
  }`}
/>
    </div>
  {mobileMenuOpen && (
    <div className="md:flex lg:hidden sm:flex justify-between top-0 left-0 h-screen pt-20 fixed w-full bg-white text-black flex flex-col items-start">
    <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileGen(mobileGen === "about" ? null : "about")}
  >
    <span>ABOUT</span>

   <FontAwesomeIcon
      icon={mobileGen === "about" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "about" && (
    <div className="pl-6 flex flex-col">
       <Link href="/locations" className="block px-4 py-2 hover:bg-gray-100">
  Locations
</Link>
    <Link href="/leadership" className="block px-4 py-2 hover:bg-gray-100">
  Leadership
</Link>
         <Link href="/beliefs" className="block px-4 py-2 hover:bg-gray-100">
  Our Beliefs
</Link>
    </div>
  )}

</div>
       <div className="w-full">

  <div
    className="flex items-center justify-between cursor-pointer py-2 px-3"
    onClick={() => setMobileGen(mobileGen === "nextStep" ? null : "nextStep")}
  >
    <span> Next Step</span>

   <FontAwesomeIcon
      icon={mobileGen === "nextStep" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "nextStep" && (
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
    onClick={() => setMobileGen(mobileGen === "nextGen" ? null : "nextGen")}
  >
    <span> Next Gen</span>

   <FontAwesomeIcon
      icon={mobileGen === "nextGen" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "nextGen" && (
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
    onClick={() => setMobileGen(mobileGen === "events" ? null : "events")}
  >
    <span> Events</span>

   <FontAwesomeIcon
      icon={mobileGen === "events" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "events" && (
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
    onClick={() => setMobileGen(mobileGen === "care" ? null : "care")}
  >
    <span> Care </span>

   <FontAwesomeIcon
      icon={mobileGen === "care" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "care" && (
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
    onClick={() => setMobileGen(mobileGen === "give" ? null : "give")}
  >
    <span>  Give </span>

   <FontAwesomeIcon
      icon={mobileGen === "give" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "give" && (
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
    onClick={() => setMobileGen(mobileGen === "sermons" ? null : "sermons")}
  >
    <span> Sermons</span>

   <FontAwesomeIcon
      icon={mobileGen === "sermons" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "sermons" && (
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
    onClick={() => setMobileGen(mobileGen === "home" ? null : "home")}
  >
    <span>Home</span>

   <FontAwesomeIcon
      icon={mobileGen === "home" ? faChevronUp : faChevronDown}
      className="transition-transform duration-300"
    />
  </div>

 
  {mobileGen === "home" && (
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