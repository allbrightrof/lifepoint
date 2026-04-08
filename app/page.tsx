'use client'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'
import Footer from '../components/Footer'
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