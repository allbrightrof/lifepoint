
import BaptismCard from "@/components/Baptism/BatismCard";

const BaptismSection = ({data}) => {
  return (
   <div className='w-full px-4 sm:px-8 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white'>
     {data.map((item) => (
  <BaptismCard key={item.id} item={item} />
))}
</div>
  )
}

export default BaptismSection;