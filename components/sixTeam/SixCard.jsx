import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
const SixCard = ({member}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <Image
        src={member.image}
        alt={member.name}
         width={800} 
        height={300} 
        className="object-cover  fill h-130"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center text-center justify-end text-white px-4 py-20">
        <h2 className="text-3xl font-bold">
            {member.name}
        </h2>
        <p className="mt-2 max-w-md">
        {member.position}
        </p>
    <Link
  href={member.link} className="bg-[#8d8d8d] mt-2 cursor-pointer font-bold px-5 py-3 text-white w-fit transition rounded-3xl flex items-center gap-2">
  Learn More
  <FontAwesomeIcon icon={faArrowRight} className="text-white" />
</Link>
      </div>

    </div>
    </div>
  );
};


export default SixCard;