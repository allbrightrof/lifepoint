import Image from "next/image";

const TwoSection = ({title,text1,text2,image,reverse = false, buttons = [], }) => {
  return (
   <>
   <div className="flex flex-col lg:flex-row items-center gap-10 p-8 lg:p-16">
     
      <div className={`flex-1 ${reverse ? "lg:order-2" :""}`}>
       <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            {title}
         </h2>

        <p className="mb-4 text-gray-700">{text1}</p>
         <p className="text-gray-700">{text2}</p>
         <div className="flex flex-col gap-3 mt-6">
  {buttons.map((btn, index) => (
    <button
      key={index}
      className="bg-black text-white px-4 self-start py-2 rounded-full"
    >
      {btn}
    </button>
  ))}
</div>
      </div>
        <div className={`flex-1 ${reverse ? "lg:order-1" : ""}`}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="rounded-xl object-cover w-full"
        />
      </div>
    </div>
    </>
  )
}

export default TwoSection;