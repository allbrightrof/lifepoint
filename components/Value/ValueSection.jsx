import { values } from "@/data/features";
import ValueCard from "../../components/Value/ValueCard";

const ValuesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 lg:p-20">
      {values.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
    </div>
  );
};

export default ValuesSection;