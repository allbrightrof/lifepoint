'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const Believe = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="w-full">

      <div
        className="flex items-center justify-between cursor-pointer bg-[#8d8d8d] py-4 px-4"
        onClick={onClick}
      >
        <span className="font-bold text-xl text-white ">{title}</span>

        <FontAwesomeIcon
          icon={isOpen ? faTimes : faChevronDown}
        className="text-white font-bold text-4xl"/>
      </div>

      {isOpen && (
        <div className="px-3 pb-4">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Believe;