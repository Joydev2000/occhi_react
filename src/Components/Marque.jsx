import React from 'react';
import { motion } from "framer-motion";

function Marque() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0" className=" relative w-full bg-[#004D43]  py-10 rounded-t-3xl">
      <div className="main flex overflow-hidden border-y-[1px] border-[#dffaf64e]  ">

        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease:"linear", duration:5}} className="text-[16vw] whitespace-nowrap font-bold text-white uppercase leading-none tracking-tighter -mt-10 "> We are Ochi  &nbsp;</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease:"linear", duration:5}} className="text-[16vw] whitespace-nowrap font-bold text-white uppercase leading-none tracking-tighter -mt-10 "> We are Ochi &nbsp; </motion.h1>
        
      </div>
    </div>
  )
}

export default Marque


