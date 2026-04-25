import Image from "next/image";


const EvtPict = ({evenData}) => {
  return (
   <div className='w-full px-4 sm:px-8 lg:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-white'>
       {evenData.map((picture => (
        <div key={picture.id} >
              <Image src={picture.image} alt={picture.title} className="rounded-lg mb-2" width={400} height={300} />
            </div>
       )))}
</div>
  )
}

export default EvtPict