import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReachCard = ({ item, variant , icon}) => { 
  const isEvents = variant === "events";

  return (
    <div className="p-2">
      <div
        className={`group relative overflow-hidden p-4 transition-all duration-300 hover:-translate-y-1
        ${isEvents ? "bg-white" : "bg-[#8d8d8d]"}`}
      >

        <div
          className={`absolute inset-0 border 
          ${isEvents ? "border-black/40" : "border-white/40"}`}
        ></div>
{/* TOP - disappear */}
<span className={`absolute top-0 left-0 w-full h-1 origin-left scale-x-100 opacity-100
group-hover:scale-x-0 group-hover:opacity-0
transition duration-500 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>

{/* BOTTOM - disappear */}
<span className={`absolute bottom-0 left-0 w-full h-1 origin-right scale-x-100 opacity-100
group-hover:scale-x-0 group-hover:opacity-0
transition duration-500 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>

{/* LEFT - disappear */}
<span className={`absolute top-0 left-0 h-full w-1 origin-top scale-y-100 opacity-100
group-hover:scale-y-0 group-hover:opacity-0
transition duration-500 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>

{/* RIGHT - disappear */}
<span className={`absolute top-0 right-0 h-full w-1 origin-bottom scale-y-100 opacity-100
group-hover:scale-y-0 group-hover:opacity-0
transition duration-500 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>


{/* TOP - return */}
<span className={`absolute top-0 left-0 w-full h-1 origin-left scale-x-0 opacity-0
group-hover:scale-x-100 group-hover:opacity-100
transition duration-700 delay-150 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>

{/* BOTTOM - return */}
<span className={`absolute bottom-0 left-0 w-full h-1 origin-right scale-x-0 opacity-0
group-hover:scale-x-100 group-hover:opacity-100
transition duration-700 delay-150 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>

{/* LEFT - return */}
<span className={`absolute top-0 left-0 h-full w-1 origin-top scale-y-0 opacity-0
group-hover:scale-y-100 group-hover:opacity-100
transition duration-700 delay-150 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>

{/* RIGHT - return */}
<span className={`absolute top-0 right-0 h-full w-1 origin-bottom scale-y-0 opacity-0
group-hover:scale-y-100 group-hover:opacity-100
transition duration-700 delay-150 ease-in-out
${isEvents ? "bg-black" : "bg-white"}`}></span>

        <div className="relative z-10 flex flex-col gap-3">

          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={250}
            className="rounded-xl object-cover w-full h-40"
          />

          <h3
            className={`font-bold text-lg ${
              isEvents ? "text-black" : "text-white"
            }`}
          >
            {item.name}
          </h3>

          <p
            className={`text-sm ${
              isEvents ? "text-[#7f7f7f]" : "text-white"
            }`}
          >
            {item.title}
          </p>

          <div
            className={`flex items-center gap-2 text-sm ${
              isEvents ? "text-[#7f7f7f]" : "text-gray-200"
            }`}
          >
         {icon && <FontAwesomeIcon icon={icon} />}
            <span>{item.date}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReachCard;