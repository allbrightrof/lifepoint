'use client'
import ReachCard from "@/components/reach/ReachCard";

const ReachPar = ({ data, variant , icon}) => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
      {data.map((item) => (
        <ReachCard key={item.id} item={item} variant={variant} icon={icon} />
      ))}
    </div>
  );
};

export default ReachPar;