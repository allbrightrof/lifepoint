import React from 'react'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';
const notFound = () => {
  return (
    <>
  <Navbar variant = "white" />
 <div className="flex flex-col bg-white gap-4 lg:py-30 py-20 max-w-2xl text-center mx-auto items-center">
    <h3 className="text-xl font-bold lg:text-2xl text-black">404</h3>

    <p className="text-black text-xl">Sorry we couldnt find the page your were looking for.</p>
       <Link href="/" ><button className="bg-[#8d8d8d] cursor-pointer font-bold px-5 py-3 text-white w-fit transition rounded-3xl">
     Go Back Home
    </button></Link>
  </div>
  <Footer/>
  </>
  )
}

export default notFound