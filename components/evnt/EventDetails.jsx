'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,  faCalendarDays,  faWater,  faUsers, faHandsPraying, faMessage} from '@fortawesome/free-solid-svg-icons';
import EvtPict from "@/components/evnt/EvtPict";
import {pictures} from "@/data/features";
import Link from 'next/link';
const EventDetails = () => {

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
     <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-20 sm:p-5  md:p-5 ">
        {features.map((features) => (
            <div key={features.id} className='bg-white flex flex-col gap-4 rounded-lg shadow p-12 hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition duration-300'>
         <div className="w-14 h-14 rounded-full bg-[#8d8d8d] flex items-center justify-center">
        <FontAwesomeIcon icon={features.icon} className='text-white' />
    </div>
    <div>
                <h3 className='font-bold text-black'>{features.title}</h3>
                <p className='font-bold text-gray-700'>{features.description}</p>
          <Link href="/events"> <span className="cursor-pointer font-bold text-[#8d8d8d] lg:text-2xl text-xl py-2 border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300 w-max">
  Learn More
</span>  </Link>
</div>
            </div>
        ))}
     </div>
<EvtPict evenData={pictures}/>
    </div>

    </>
  )
}

export default EventDetails