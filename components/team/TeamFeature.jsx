import { team } from "@/data/features";
import TeamCard from "../team/TeamCard";

const TeamFeature = ({ group }) => {
  const filteredTeam = team.filter(
    (member) => member.group === group
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 sm:p-2 md:p-3 lg:p-6">
      {filteredTeam.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamFeature;