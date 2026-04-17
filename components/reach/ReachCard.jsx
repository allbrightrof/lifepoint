import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const ReachCard = ({ item }) => {
  return (
    <div className="p-2">
      <div className="group relative bg-[#8d8d8d] rounded-2xl overflow-hidden p-4 transition-all duration-300 hover:-translate-y-1">

        <div className="absolute inset-0 rounded-xl border border-white/40"></div>

     <span className="absolute top-0 left-0 w-full h-1 bg-white origin-left scale-x-100 group-hover:scale-x-0 active:scale-x-0 transition duration-500"></span>

<span className="absolute bottom-0 left-0 w-full h-1 bg-white origin-right scale-x-100 group-hover:scale-x-0 active:scale-x-0 transition duration-500"></span>

<span className="absolute top-0 left-0 h-full w-1 bg-white origin-top scale-y-100 group-hover:scale-y-0 active:scale-y-0 transition duration-500"></span>

<span className="absolute top-0 right-0 h-full w-1 bg-white origin-bottom scale-y-100 group-hover:scale-y-0 active:scale-y-0 transition duration-500"></span>
        <div className="relative z-10 flex flex-col gap-3">

          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={250}
            className="rounded-xl object-cover w-full h-40"
          />

          <h3 className="text-white font-bold text-lg">
            {item.name}
          </h3>

          <p className="text-white text-sm">
            {item.title}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-200">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>{item.date}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReachCard;