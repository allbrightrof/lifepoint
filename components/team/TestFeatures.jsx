import FeatureCard from "@/components/evnt/FeatureCard";

const TestFeatures = ({data , variant = "black"}) => {
  return (
    <div className={` grid grid-cols-1 ${variant === "black" ? "bg-black" : "bg-[#f4f4f4]"} sm:grid-cols-2 lg:grid-cols-3 gap-4  py-7 p-3 sm:p-3 md:p-10 lg:p-12`}>
      {data.map((event) => (
       <FeatureCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default TestFeatures;