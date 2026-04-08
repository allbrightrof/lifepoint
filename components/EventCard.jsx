'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
const EventCard = () => {
  
const events = [

{
  id: 1,
  title: "Culpeper",
  address: "Culpeper County High School\n14240 Achievement Dr\nCulpeper, VA 22701",
  date: "Sundays",
  time: "9:00am and 10:45am",
  image: "/event1.jpg",
  link: "/events/culpeper"
},

{
  id: 2,
  title: "Fredericksburg",
  address: "1400 Central Park Blvd\nFredericksburg, VA 22401",
  date: "Sundays",
  time: "9:00am and 10:45am",
  image: "/event2.jpg",
  link: "/events/fredericksburg"
},

{
  id: 3,
  title: "Fredericksburg North",
  address: "Stafford High School\n63 Stafford Indians Ln\nFredericksburg, VA 22405",
  date: "Sundays",
  time: "9:00am and 10:30am",
  image: "/event3.jpg",
  link: "/events/fredericksburg-north"
},

{
  id: 4,
  title: "Richmond",
  address: "Glen Allen High School\n10700 Staples Mill Rd\nGlen Allen, VA 23060",
  date: "Sundays",
  time: "9:00am and 11:15am",
  image: "/event4.jpg",
  link: "/events/richmond"
},

{
  id: 5,
  title: "Spotsylvania",
  address: "Staples Mill Rd\nGlen Allen High School\n10700 Glen Allen, VA 23060",
  date: "Sundays",
  time: "10:00am and 11:45am",
  image: "/event5.jpg",
  link: "/events/spotsylvania"
},

{
  id: 6,
  title: "Louisville",
  address: "Glen Allen High School\nVA 23060 Staples Mill Rd\nGlen Allen",
  date: "Sundays",
  time: "9:00am and 11:45am",
  image: "/event6.jpg",
  link: "/events/louisville"
}
];

  return (
    <>
    <div className='w-full bg-black flex flex-col items-center justify-center sm:p-10 lg:p-20 gap-10'>
        <div className='text-white py-10 w-full px-4 sm:px-8 lg:px-20'>
    <p className='text-center font-bold text-2xl sm:text-3xl lg:text-3xl p-5'>Plan your Visit</p>
    <h2 className='text-center font-bold text-3xl sm:text-4xl lg:text-5xl p-5'>One Church, Many Rooms.</h2>
    <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>New here? Plan your visit to find service times, locations, and what to expect at a location near you! </p>
 </div>
 <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {events.map((event) => (
            <div key={event.id} className="bg-white flex flex-col gap-4 rounded-lg shadow py-7 p-4">
                <Image src={event.image} alt={event.title} className="rounded-lg mb-2" width={400} height={300} />
                <h3 className="font-bold text-lg text-black">{event.title}</h3>
                <p className="text-gray-600">{event.address}</p>
                <p className="text-gray-600">{event.date} at {event.time}</p>
               <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-3xl hover:bg-gray-300 transition w-auto self-start">
    Read More <FontAwesomeIcon icon={faArrowRight} />
  </button>
            </div>
        ))}
        
        
        
        </div>
    <div className="w-full px-4 sm:px-8 lg:px-16 py-13 text-white flex  flex-col items-center">
       <Image src="/online.jpg" alt="online Events" width={400} height={300}/>
           <h2 className='text-center font-bold text-3xl text-white sm:text-3xl lg:text-3xl p-5'>Join Us Online</h2>
             <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>If you can’t be in the room, you can still be a part of what God is doing. Join us online for messages and worship from wherever you are.</p>
               <p className='text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg'>Sundays 10:00am, 1:00pm & 8:00pm</p>
    </div>
        </div>
    <div className="bg-[#ffffff] py-10 w-full px-4 sm:px-8 lg:px-20 flex flex-col items-end justify-center-s">
        <p className='p-5 max-w-3xl text-sm sm:text-base lg:text-lg text-black'>NextGen Ministry</p>
               <h2 className='text-center font-bold text-2xl text-black sm:text-3xl lg:text-4xl p-2'>For Kids and Teens</h2>
                       <p className='p-2 max-w-3xl text-sm sm:text-base lg:text-lg text-black'>From infants to high schoolers,
                         we’re passionate about creating safe, fun, and engaging environments where kids and teens can grow in their faith,
                         build meaningful friendships, and discover their purpose in Jesus.
                         Every age matters, and every week is designed with them in mind.</p>
            <div className="flex gap-4 text-[#bdbdbd]">
             <span className="cursor-pointer py-2 border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300">
  Kids Point
<FontAwesomeIcon icon={faArrowRight} className="text-[#bdbdbd]"/> </span>
                 <span className="cursor-pointer py-2 border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300">
  Youth
<FontAwesomeIcon icon={faArrowRight}  className="text-[#bdbdbd]"/> </span>
            </div>
    </div>
    </>
  )
}

export default EventCard