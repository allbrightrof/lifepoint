import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BaptismCard = ({ item }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      
      <Image 
        src={item.image || "/fallback.jpg"} 
        alt={item.name || "image"} 
        width={800} 
        height={300} 
        className="w-full h-96 object-cover"
      />

      <div className="p-6">
        <h3 className='font-bold text-lg text-black py-3'>
          {item.name || "No title"}
        </h3>

        <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer w-fit">
          Read More
          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default BaptismCard;