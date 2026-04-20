import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TwoSection from "@/components/salvation/TwoSection";
import { smallEvents } from "@/data/features";
import { missionTrips } from "@/data/features";
import ReachPar from "@/components/reach/ReachPar";
import { faCalendarDays} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <>
  <Navbar variant = "transparent" />
    <div className="relative w-full min-h-screen">
        <Image src="/ghana.jpg" alt="smallgroups" width={400} height={300} className="absolute top-0 left-0 w-full h-full object-cover mb-2" />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20">
         <h2 className='text-center font-bold text-white text-3xl sm:text-4xl lg:text-7xl p-5'>Outreach & Missions</h2>
  </div>
  </div>
 <div className="w-full bg-white p-2">
    <h2 className='text-center font-bold text-black text-xl sm:text-xl lg:text-5xl p-5'>Serve Locally. Love Radically</h2>
  <TwoSection
    title="Monthly Projects"
     text3="By participating in local outreach, you can show people the love of Jesus and make a difference in your community. Join us on the second  Saturday every month for One Serve. "
       text4="For more information about Outreach opportunities, visit the black tent at your campus. "
     image="/reach.jpg"
      buttons={[
  'Upcoming Projects'
]}
  />
  <TwoSection
    title="Paint the Town Red"
    text3="July 9-12, 2026"
    text4="IEvery year, we come together to serve our communities in Jesus’ name. Join us for a full weekend of outreach projects across our cities."
    text5="From supporting local food banks to hands-on projects in our neighborhoods, there is a place for everyone to serve."
    image="/reach1.jpg"
    reverse={true}
      buttons={[
  'More Details'
]}
  />
    <TwoSection
    title="Serve App"
     text3="To stay connected with Outreach, download the Serve App today!"
       buttons={[
  'Apple Store','Google Play'
]}
       text4="Select Lifepoint Church  Fredericksburg, VA as your church. Now you're ready to create your profile and begin browsing projects!"
     image="/reach2.jpg"
  />
 </div>
 <div className="bg-[#8d8d8d] w-full lg:p-15 sm:p-5 p-5 md:p-10">
  <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl text-white text-center max-w-3xl font-bold">Upcoming Local <br/> Outreach Opportunities</h2>
 <ReachPar data={smallEvents}  icon={faCalendarDays}/>
 </div>
    <div className="w-full bg-white p-5 md:p-8 lg:p-15">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/2 p-6 lg:p-16 flex flex-col gap-6">

          <h2 className="text-3xl lg:text-5xl font-bold text-black">
            Be the Solution. Impact the World.
          </h2>

          <p className="text-gray-700">
            We regularly deploy teams on mission, send disaster relief aid and teams,
            and invest in our partners financially.
          </p>

          <div>
            <h3 className="font-bold text-black text-xl mb-2">Global Partners:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>BBPT with the Banjara Community, India</li>
              <li>Centre of Good News, Ghana</li>
              <li>OneChild</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">National Partners:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>LA Dream Center</li>
              <li>Samaritan’s Purse</li>
              <li>Trafficking Hope</li>
              <li>ARC</li>
              <li>Convoy of Hope</li>
            </ul>
          </div>
    <button className="w-fit flex items-center font-bold gap-2 bg-[#8d8d8d] text-white px-4 py-3 rounded-3xl cursor-pointer">
  Disaster Relief
  <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 font-bold" />
</button>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="/ghanaKid.jpg"
            alt="Mission work"
            width={600}
            height={500}
            className="object-cover"
          />
        </div>

      </div>
    </div>
 <div className="bg-[#8d8d8d] w-full lg:p-15 sm:p-5 p-5 md:p-10">
  <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl text-white text-center max-w-3xl font-bold">Upcoming Local <br/> Outreach Opportunities</h2>
 <ReachPar data={missionTrips} icon={faCalendarDays}/>
 </div>
    <Footer />
    </>
  )
}

export default page