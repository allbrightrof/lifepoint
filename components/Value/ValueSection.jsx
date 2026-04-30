
import ValueCard from "../../components/Value/ValueCard";

const ValuesSection = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 lg:p-20">
      {data.map((datas) => (
        <ValueCard key={datas.id} datas={datas} />
      ))}
    </div>
  );
};

export default ValuesSection;