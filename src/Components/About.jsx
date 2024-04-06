import React from 'react'

function About() {
  return (
    <div className="w-full p-20 py-20 bg-[#CDEA68] h-full rounded-t-3xl">
        <h1 className=" text-[4vw] leading-[4vw] tracking-tighter w-[85%]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="iamgediv flex justify-between w-full mt-20 pt-20 border-t-[1px] border-[#181c0a] ">
         <div className="text_content w-1/2">
            <h1 className="text-7xl">Our approach:</h1>
            <button className=" flex items-center gap-6 broder text-xl mt-10  py-5 px-8 rounded-full bg-black text-white uppercase ">Read more
            <div className="w-3 h-3 bg-white rounded-full"></div></button>
         </div>
         <div className="image_content w-1/2 h-[70vh] overflow-hidden rounded-3xl bg-red-500">
         <img className="min-w-full min-h-full object-cover object-center" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
         </div>
        </div>
    </div>
  )
}

export default About