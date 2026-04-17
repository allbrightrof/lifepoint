import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeliefCard = ({ data }) => {
  const beliefs = data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-20 sm:p-5 md:p-5">
      {beliefs.map((belief) => (
        <div
          key={belief.id}
          className="bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition duration-300 p-8 flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#8d8d8d] flex items-center justify-center">
            <FontAwesomeIcon icon={belief.icon} className="text-white text-xl" />
          </div>

          <h3 className="font-bold text-black text-lg">
            {belief.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            {belief.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BeliefCard;