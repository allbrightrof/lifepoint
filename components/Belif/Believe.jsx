'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const Believe = ({ title, content, content1, content2, content3, content4, content5, isOpen, onClick, variant = "dark" }) => {
    const styles = {
    dark: {
      container: "bg-[#8d8d8d]",
      text: "text-white",
      icon: "text-white",
    },
    light: {
      container: "bg-white",
      text: "text-black",
      icon: "text-black",
    },
  };
   const current = styles[variant];
   
  return (
    <div className="w-full">

     <div
        className={`flex items-center justify-between cursor-pointer py-4 px-4 ${current.container}`}
        onClick={onClick}
      >
        <span className={`font-bold text-xl ${current.text}`}>
          {title}
        </span>

        <FontAwesomeIcon
          icon={isOpen ? faTimes : faChevronDown}
          className={`${current.icon} font-bold text-4xl`}
        />
        </div>
         {isOpen && (
  <div className="px-3 pb-4">
    <p className="text-gray-600">{content}</p>

    {content5 && <p className="text-white pb-2">{content5}</p>}

    <ul className="text-white list-disc pl-5">
      {content1 && <li>{content1}</li>}
      {content2 && <li>{content2}</li>}
      {content3 && <li>{content3}</li>}
      {content4 && <li>{content4}</li>}
    </ul>
  </div>
)}
    </div>
  );
};

export default Believe;