import { six } from "@/data/features";
import SixCard from "../sixTeam/SixCard";

const SixFeature = ({group}) => {
  const filteredSix = six.filter(
    (member) => member.group === group
  );
  return (
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  py-7 p-3 sm:p-3 md:p-10 lg:p-12`}>
      {filteredSix.map((member) => (
       <SixCard key={member.id} member={member} />
      ))}
    </div>
  )
}

export default SixFeature