import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';

function Landing() {
motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full py-1 h-screen text-white">
        <div className="texttexture   mt-60 px-20">
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((items, index) => {
                 return <div className="markars flex items-end">
                    {index === 1 && (
                        <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1], duration:2}} className=" ml-2 relative rounded-md bg-red-800  w-[8vw] h-[4.4vw] overflow-hidden">
                            <img className=" w-full h-full object-cover object-center" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                        </motion.div>
                    )}
                    <h1 className="text-[6vw] leading-[.85] font-bold tracking-tighter">{items}</h1>
                 </div>
            })}
        </div>
        <div className="line  pt-8 px-20 mt-40  border-t-[1px] border-zinc-700 flex justify-between ">
           
            {["For public and private companies","From the first pitch to IPO"].map((items, index) => {
                return <p className="text-xl font-light capitalize">{items}</p>
            })}
          <div className="botton flex gap-6 items-center ">
            <p className="broder text-xl font-light border-[1px] px-4 py-1 rounded-full border-zinc-400 uppercase">Start The Project</p>
            <span className=" rotate-45 flex items-center justify-center  border-[1px] border-zinc-300 rounded-full text-lg   w-10 h-10"><FaArrowUpLong /></span>
          </div>
          
          
        </div>
    </div>
  )
}

export default Landing