'use client'
import { verses } from "@/data/features";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Verses = () => {
   const [index, setIndex] = useState(0);

     useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % verses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

   const currentVerse = verses[index];


  return (
 <div className="bg-black py-15 px-6 text-center text-white">

  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
     <h2 className="text-xl text-center max-w-4xl mx-auto lg:text-3xl">
  {currentVerse.text}
</h2>

<h3 className="mt-4 text-center font-bold mx-auto">
  {currentVerse.reference}
</h3>
    </motion.div>
  </AnimatePresence>

</div>
  );
};


export default Verses;