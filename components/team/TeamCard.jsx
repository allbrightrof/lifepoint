import Image from "next/image";

const TeamCard = ({ member }) => {
  return (
   <div className='bg-white rounded-lg shadow-md'>
    <div>
      <Image 
        src={member.image} 
        alt={member.name} 
        width={800} 
        height={300} 
        className="rounded-lg mb-2" 
      />
      </div>
      <div className="p-6 flex flex-col gap-2 items-center">
      <h3 className='font-bold text-lg text-black'>{member.name}</h3>
      <p className='text-gray-600'>{member.position}</p>
       </div>
    </div>
  );
};

export default TeamCard;