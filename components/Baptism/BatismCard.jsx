import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BatismCard = ({ baptisms }) => {
  return (
   <div className='bg-white rounded-lg shadow-md'>
    <div>
      <Image 
        src={baptisms.image} 
        alt={baptisms.name} 
        width={800} 
        height={300} 
        className="rounded-lg mb-2" 
      />
      </div>
      <div className="p-6">
      <h3 className='font-bold text-lg text-black py-3'>{baptisms.name}</h3>
       <button className="flex items-center gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer w-auto">
          Read More<FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
        </button>
       </div>
    </div>
  );
};

export default BatismCard