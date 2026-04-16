import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TwoSection from "@/components/salvation/TwoSection";
import Verses from "../../components/salvation/Verses";

const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/salvation.jpg" alt="our leadership" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Fully Alive in Christ</h2>
         <p className='p-5 max-w-7xl text-white mx-auto text-sm sm:text-base lg:text-lg'>No matter your past, your questions, 
            or where you find yourself today,
             Gods love is available to you right now.</p>
       <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-3xl cursor-pointer w-auto">
     I Said &quot;Yes&quot; to Jesus
  </button>
  </div>
  </div>
  <div className="bg-white p-9 lg:p-15">
           <h2 className='text-center font-bold text-black text-3xl sm:text-4xl lg:text-4xl'>A New Beginning With Jesus</h2>
         <p className='p-5 max-w-2xl text-center text-black mx-auto text-sm sm:text-base lg:text-lg'>The Bible tells us that sin separates us from God. 
            Yet God loved us so much that He sent Jesus to restore what was broken. Jesus lived a perfect life, died on the cross for our sins, and rose again so we could experience forgiveness, freedom, and new life. Salvation is not about being perfect or having everything figured out.
             It is about trusting Jesus and choosing to follow Him.
             Gods love is available to you right now.</p>
  </div>
  <div className="bg-[#f4f4f4]">
  <TwoSection
  title="What Does It Mean to Say Yes to Jesus?"
  text1="Saying yes to Jesus begins with acknowledging your need for Him. It means believing that Jesus is the Son of God who died and rose again. It is a choice to turn from your old way of life and follow Him.
   When you place your trust in Jesus, you receive forgiveness and new life through grace."
  text2="This decision changes everything. It is the beginning of a relationship, not the end of a journey."
  image="/mediumsquare.jpg"
/>

<TwoSection
  title="A Prayer to Begin"
  text1="If you are ready to take this step, you can pray a simple prayer like this.
   These words are not magic.
   What matters is the posture of your heart as you place your trust in Jesus."
  text2="Jesus, I need You. I believe You died for my sins and rose again.
   I turn from my old ways and choose to follow You. Forgive me of my sins. Make me new.
   I place my trust in You today. Amen"
  image="/medium.jpg"
  reverse={true}
/>
<TwoSection
  title="What's Next?"
  text1="If you made this decision, let us know so we can celebrate with you and support you in this new beginning.
   One of your next steps is water baptism, a public declaration of the new life you have in Christ. We would love to walk with you as you take that step."
  image="/mediumsq.jpg"
  buttons={[
  'I Said "Yes" to Jesus',
  "Register For Water Baptism"
]}
/>
</div>
<Verses/>
    <Footer />
    </>
  )
}

export default page