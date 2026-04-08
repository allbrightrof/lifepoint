
'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {


const contactInfo = [
  {
    id: 1,
    icon: faPhone,
    title: "Call Us",
    content: "540-786-5111"
  },
  {
    id: 2,
    icon: faLocationDot,
    title: "Find Us",
    content: "1400 Central Park Blvd.\nFredericksburg, VA 22401"
  },
  {
    id: 3,
    icon: faEnvelope,
    title: "Email",
    content: "info@lifepoint.org"
  }
];
  return (
<>
    <div className='full bg-black px-4 sm:px-8 lg:px-16 py-16'>
        <div className='flex flex-col items-center'>
         <p className='p-2 max-w-3xl text-white text-sm italic sm:text-base lg:text-3xl'>We Exist to Lead People Far  <br/> God into a Full Life in Christ.</p>
                           <p className='p-2 max-w-3xl text-white text-sm sm:text-base lg:text-lg'>Know God. Find Freedom. Discover Purpose. Make a Difference.
</p>
</div>
<div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-7'>
  {contactInfo.map((info) => (
    <div key={info.id} className='flex flex-col items-center'>
      <FontAwesomeIcon icon={info.icon} className="text-xl text-white" />
      <h3 className="font-bold text-lg text-white">{info.title}</h3>
      <p className="text-white whitespace-pre-line">{info.content}</p>
    </div>
  ))}
</div>
<div className='flex gap-4 items-center justify-center py-5'>
  <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl" />
  <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
</div>
<div className="flex flex-wrap justify-center gap-4 py-5">
  <a href="/our-beliefs" className="text-white hover:text-gray-300">Our Beliefs</a>
  <a href="/our-misions" className="text-white hover:text-gray-300">Our Missions</a>
  <a href="/give" className="text-white hover:text-gray-300">Give</a>
  <a href="/events" className="text-white hover:text-gray-300">Events</a>
  <a href="/locations" className="text-white hover:text-gray-300">Locations</a>
  <a href="/jobs" className="text-white hover:text-gray-300">Jobs</a>
</div>
<div className="text-center text-[#6f6f6f] text-sm sm:text-base">
        © 2026 Lifepoint Church <br />
        The Church Co
      </div>
    </div>
    </>
  )
}

export default Footer