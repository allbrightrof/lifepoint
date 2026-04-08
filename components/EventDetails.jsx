'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,  faCalendarDays,  faWater,  faUsers, faHandsPraying, faMessage} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
const EventDetails = () => {
const pictures = [
  {
    id: 1,
    image: "/event1.jpg",
    title: "Culpeper Event"
  },
  {
    id: 2,
    image: "/event2.jpg",
    title: "Fredericksburg Event"
  },
  {
    id: 3,
    image: "/event3.jpg",
    title: "Fredericksburg North Event"
  },
  {
    id: 4,
    image: "/event4.jpg",
    title: "Richmond Event"
  }
];
const features = [
  {
    id: 1,
    title: "Get Involved",
    description: "Take your next step and find your place in what God is doing here.",
    icon: faHeart
  },
  {
    id: 2,
    title: "Upcoming Events",
    description: "Events at Lifepoint help you grow, connect, and move forward in faith.",
    icon: faCalendarDays
  },
  {
    id: 3,
    title: "Water Baptism",
    description: "Go public with your faith and celebrate new life through baptism.",
    icon: faWater
  },
  {
    id: 4,
    title: "Small Groups",
    description: "Build community and grow in faith by joining a small group today.",
    icon: faUsers
  },
  {
    id: 5,
    title: "Need Prayer",
    description: "Whatever you’re facing, we believe prayer changes everything.",
    icon: faHandsPraying
  },
  {
    id: 6,
    title: "Share Your Story",
    description: "Your story matters. Share with us what God has done in your life.",
    icon: faMessage
  }
];
  return (
    <>
    <div className='bg-[#f4f4f4]'>
      <div className="py-10 w-full px-4 sm:px-8 lg:px-20 flex flex-col items-start justify-center-s">
        <p className='p-5 max-w-3xl text-sm sm:text-base lg:text-lg text-black'>Get Connected</p>
               <h2 className='text-center font-bold text-2xl text-black sm:text-3xl lg:text-4xl p-2'>Nest Steps</h2>
                       <p className='p-2 max-w-3xl text-sm sm:text-base lg:text-lg text-black'>Get Connected: Discover authentic community,
                         build meaningful relationships,
                         and take your first step toward getting involved.</p>
    </div>
     <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-20 sm:p-5  md:p-5">
        {features.map((features) => (
            <div key={features.id} className='bg-white flex flex-col gap-4 rounded-lg shadow p-12'>
         <div className="w-14 h-14 rounded-full bg-[#8d8d8d] flex items-center justify-center">
        <FontAwesomeIcon icon={features.icon} className='text-white' />
    </div>
                <h3 className='font-bold text-lg text-black'>{features.title}</h3>
                <p>{features.description}</p>
             <span className="cursor-pointer font-bold text-[#8d8d8d] text-2xl py-2 border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300 w-max">
  Learn More
</span>
            </div>
        ))}
     </div>
<div className='w-full px-4 sm:px-8 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-white'>
       {pictures.map((picture => (
        <div key={picture.id} >
              <Image src={picture.image} alt={picture.title} className="rounded-lg mb-2" width={400} height={300} />
            </div>
       )))}
</div>
    </div>

    </>
  )
}

export default EventDetails