import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ValueCard = ({ datas }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center text-center">

      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
        <FontAwesomeIcon icon={datas.icon} className="text-white text-xl" />
      </div>

      <h3 className="text-xl font-bold text-black mb-3">
        {datas.title}
      </h3>

     
      {datas.points?.length > 0 && (
        <ul className="space-y-2">
          {datas.points.map((point, index) => (
            <li key={index} className="text-gray-600 text-sm">
              • {point}
            </li>
          ))}
        </ul>
      )}


      {datas.paragraphs?.length > 0 && (
        <div className="space-y-2 text-gray-600 text-sm">
          {datas.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}

    </div>
  );
};



export default ValueCard;