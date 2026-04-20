import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const EventCard = ({ event }) => {
  return (
    <>
    <div className="bg-white flex flex-col gap-4 rounded-lg shadow">
      <Image src={event.image} alt={event.title} width={400} height={300} className="rounded-lg mb-2" />
     <div className="p-5 flex flex-col gap-3"> 
      <h3 className="font-bold text-lg text-black">{event.title}</h3>
      
      <p className="text-gray-600 whitespace-pre-line">
        {event.address}
      </p>
      
      <p className="text-gray-600">
        {event.date}  {event.time}
      </p>
     <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-2 rounded-3xl cursor-pointer w-auto self-start">
    Read More<FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
  </button>
  </div>
    </div>
    </>
  );
};

export default EventCard;