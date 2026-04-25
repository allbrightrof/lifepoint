import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const TwoCard = ({data}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-6 lg:px-20 py-6 lg:py-15 ">
      {data.map((twince) => (
        <div key={twince.id} className="bg-white rounded-2xl p-8 flex flex-col items-center  justify-center text-center gap-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 transition duration-300">
             <div className="w-16 h-16 rounded-full bg-[#8d8d8d] flex items-center justify-center">
            <FontAwesomeIcon icon={twince.icon} className="text-white text-xl" />
          </div>
             <h3 className="font-bold text-black text-lg">
            {twince.name}
          </h3>
             <p className="text-black text-sm leading-relaxed max-w-xs">
            {twince.direction}
          </p>
           <p className="text-black text-sm leading-relaxed max-w-xs">
            {twince.details}
          </p>
           <Link href="/kidspoint"><span className="cursor-pointer text-[#8d8d8d] font-bold border-b-2 border-[#bdbdbd] hover:border-transparent transition-all duration-300">
  Get Directions
<FontAwesomeIcon icon={faArrowRight} className="text-[#bdbdbd]"/> </span> </Link> 
        </div>
      ))}
    </div>
  )
}

export default TwoCard