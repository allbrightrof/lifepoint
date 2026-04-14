'use client'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from '../components/layout/Hero';
import EventCard from '../components/evnt/EventCard'
import EventDetails from '../components/evnt/EventDetails'
const page = () => {

  return (
    <div>
       <Navbar />
         <Hero />
         <EventCard />
         <EventDetails />
         <Footer />
    </div>
  )
}

export default page