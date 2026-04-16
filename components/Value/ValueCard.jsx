import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ValueCard = ({ value }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center text-center">
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
        <FontAwesomeIcon icon={value.icon} className="text-white text-xl" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-black mb-3">
        {value.title}
      </h3>

      {/* Points */}
      <ul className="space-y-2">
        {value.points.map((point, index) => (
          <li key={index} className="text-gray-600 text-sm">
            • {point}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ValueCard;