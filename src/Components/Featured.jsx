import React, { useState } from 'react'
import { motion,useAnimation } from "framer-motion"



function Featured() {

  const cards = [ useAnimation(), useAnimation()];
  
  const handelhovre = (index) =>{
    cards[index].start({y : "0"})
  }
  const handelhovreEnd = (index) =>{
    cards[index].start({y : "100%"})
  }
  return (
    <div className="bg-black w-full py-40 ">
        <div className="w-full px-20 border-b-[1px] pb-16 border-zinc-700">
        <h1 className="text-white text-7xl">Featured Projects</h1>
        </div>

        <div className="cardcontainer flex gap-10 px-20 pt-20">
          <motion.div onHoverStart={ () => handelhovre(0)} onHoverEnd={()=> handelhovreEnd(0)} className="card relative rounded-2xl   h-[65vh] w-full">
           <div className="w-full h-full overflow-hidden rounded-2xl">
           <img className=" w-full h-full bg-cover " src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
           </div>
      
           <h1 className="  overflow-hidden flex absolute font-bold z-[99] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl tracking-tighter text-[#CDEA68]"> 
           {"FYDE".split('').map((item, index) => <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36,1], delay:index*.05}} className='inline-block' >{item}</motion.span>)}
            </h1>
          </motion.div>

        <motion.div onHoverStart={ () => handelhovre(1)} onHoverEnd={()=> handelhovreEnd(1)} className="card relative rounded-2xl   h-[65vh] w-full">
          <div className="w-full h-full overflow-hidden rounded-2xl">
          <img className=" w-full h-full bg-cover " src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
          </div>
          <h1 className=" flex overflow-hidden absolute font-bold z-[99] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl tracking-tighter text-[#CDEA68]">   {"VISE".split('').map((item, index) => <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36,1], delay:index*.05}} className='inline-block'  >{item}</motion.span>)} </h1>
           
          </motion.div>
        </div>
    </div>
  )
}

export default Featured