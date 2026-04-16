import {baptism} from "@/data/features";
import BaptismCard from "@/components/Baptism/BatismCard";

const BaptismSection = () => {
  return (
   <div className='w-full px-4 sm:px-8 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white'>
     {baptism.map((baptisms) => (
  <BaptismCard key={baptisms.id} baptisms={baptisms} />
))}
</div>
  )
}

export default BaptismSection;