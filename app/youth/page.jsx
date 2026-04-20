
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import TwoSection from "@/components/salvation/TwoSection";

const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
         <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dth0uegpp/video/upload/v1776467242/document_5985507204420083186_u8tp1q.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
  </div>
  <div className="bg-[#f5f5f5] flex flex-col items-center py-16 lg:px-20 sm:px-10 px-10">
    <div className="max-w-3xl text-center">
           <h2 className='text-center font-bold text-black text-2xl sm:text-4xl lg:text-5xl'>Lifepoint Youth exists so that middle and high schoolers would know God, find freedom, discover purpose, and make a difference within a life-giving community.</h2>
         <p className='p-5 max-w-2xl text-center text-black mx-auto text-sm sm:text-base lg:text-lg'>Our Mission</p>
   </div>
   <div className="flex flex-row flex-wrap gap-4">
     <button className="w-fit font-bold gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer">
   <FontAwesomeIcon icon={faFacebook} className="w-3 h-3 font-bold" /> FaceBook
</button>
   <button className="w-fit font-bold gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer">
   <FontAwesomeIcon icon={faInstagram} className="w-3 h-3 font-bold" /> Instagram
</button>
</div>
   </div>
 <TwoSection
  title="Youth Groups"
  text3="Youth Groups are Small Groups that connect students to Jesus and each other."
  text4="Each Youth Group caters to different interests and age groups, so all students can find a group that fits. Connect with your group today."
  image="/youth1.jpg"
   buttons={[
  'Find Your Youth Group'
]}
/>

<TwoSection
  title="Youth Night"
  text3="Join other middle and high school students the second Wednesday of every month for Youth Night from 6:30pm-8:30pm.  Youth Night is a large gathering of students across all of our campuses that connect for powerful worship, a life-giving message, and community. Meet new friends and grow your faith at this month’s Youth Night.
   There’s no need to pre-register, just show up and be a part of this incredible night! "
  text4="Youth Night is hosted at the Spotsylvania Campus: 5050 Gateway"
  text5="Blvd. Fredericksburg, VA 22407"
  image="/youth2.jpg"
  reverse={true}
/>

 <TwoSection
  title="Youth Conference"
  text3="An annual event that will blow your mind, Youth Conference is the party of the summer!"
  text4="Worship, powerful messages, and excitement collide as students come together to know God and find freedom. Join other middle 
  and high school students for the weekend you’ll talk about for the rest of the year."
  image="/youth3.jpg"
   buttons={[
  'Conference Info'                                                                                                                                                                                                                                                                                                                                                                                   
]}
/>
    <Footer />
    </>
  )
}

export default page