'use client'
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
const Page = () => { 

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    share: "public",
    type: "prayer",
    message: "",
  });

  const [prayers, setPrayers] = useState([]);

  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/prayerwall.jpg" alt="one" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Prayer Wall</h2>
         <p className='p-5 max-w-7xl text-white mx-auto text-xl sm:text-base lg:text-2xl'>Prayer Changes Everything. </p>
  </div>
  </div>
          <div className="p-6 flex flex-col gap-4 items-center bg-white">
    <h3 className="text-2xl font-bold text-black">It’s our honor to pray with you.</h3>

    <p className="text-black text-xl max-w-2xl">
Our online prayer wall is a space to pray together. You can share your prayer requests and take time to pray for others in our church family and community.
    </p>

 <button
  onClick={() => setShowForm(true)}
  className="bg-[#8d8d8d] px-5 py-3 text-white w-fit font-bold transition rounded-3xl"
>
  Submit Your Prayer Request
</button>
  </div>

  {showForm && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    
    <div className="bg-white w-[90%] max-w-2xl p-6 relative flex flex-col gap-4">

  
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-3 text-xl text-black font-bold"
      >
        ✕
      </button>

      <h3 className="text-xl font-bold text-black">Submit Prayer</h3>


      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border-5 border-black p-3 w-full text-black"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="border-5 border-black p-3 w-full text-black"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>

      <input
        type="text"
        placeholder="Phone Number"
        className="border-5 border-black p-3 w-full text-black"
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
      />

      <select
        className="border-5 border-black p-3 text-black"
        onChange={(e) =>
          setFormData({ ...formData, share: e.target.value })
        }
      >
        <option value="public">Public</option>
        <option value="anonymous">Anonymous</option>
        <option value="dont">Dont Share</option>
      </select>

      <select
        className="border-5 border-black p-3 text-black"
        onChange={(e) =>
          setFormData({ ...formData, type: e.target.value })
        }
      >
        <option value="prayer">Prayer Request</option>
        <option value="praise">Praise Report</option>
      </select>


      <textarea
        placeholder="Write your prayer request..."
        className="border-5 border-black p-3 h-32 text-black"
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
      />

      <button
        onClick={() => {
          setPrayers([...prayers, formData]);
          setShowForm(false);
        }}
        className="bg-black text-white py-3 font-bold"
      >
        Submit
      </button>
    </div>
  </div>
)}
<div className="p-6 gap-4">
  {prayers.map((item, index) => (
    <div key={index} className="border-5 border-black p-4">

      <h4 className="font-bold">
        {item.share === "anonymous" ? "Anonymous" : item.name}
      </h4>

      <p className="text-sm text-gray-500">{item.type}</p>

      <p className="mt-2">{item.message}</p>

    </div>
  ))}
</div>
    <Footer />
    </>
  )
}

export default Page