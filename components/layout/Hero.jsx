import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
const Hero = () => {
  return (
    <>
  <div className="relative w-full min-h-[90vh] sm:min-h-screen">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dth0uegpp/video/upload/v1776419078/semonloop_bqnkq9.mp4"
        autoPlay
        loop
        muted
        playsInline
      />


      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20">
        <h2 className="text-white leading-tight text-[clamp(2rem,6vw,6rem)]">
          Fully Alive <br /> In Christ
        </h2>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/locations">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-3xl hover:bg-gray-200 transition">
            Plan A Visit <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </Link>
          <Link href="/getInvolved">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-3xl hover:bg-gray-200 transition">
            Get Involved <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </Link>
          <Link href="/sermon">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-3xl hover:bg-gray-200 transition">
            Recent Messages <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </Link>
        </div>
      </div>
  
    </div>
       <div className="bg-[#f9f9f9] py-10 w-full px-4 sm:px-8 lg:px-20">
        <div>
          <h2 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl p-5">
            Who We Are
          </h2>

          <p className="text-center p-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
            Lifepoint Church exists to lead people far from God into a full life in Christ.
            Were a community built on faith, passionate about seeing lives changed by Jesus.
            No matter your story, you belong here. Theres a place for you to grow, find purpose, and take your next step in faith.
          </p>
        </div>

        <div className="flex flex-wrap bg-white justify-center items-center gap-3 mt-4 text-white">
          <Link href="/beliefs">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800 transition">
            Our Beliefs <FontAwesomeIcon icon={faArrowRight} />
          </button>
</Link>
<Link href="/leadership">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800 transition">
            Our Leadership <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </Link>
        </div>
      </div>
      </>
  );
}

export default Hero;