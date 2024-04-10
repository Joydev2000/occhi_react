import React from 'react'


function Cards() {


  return (
    <div className="relative w-full   bg-zinc-900">
        <div className="cardContainer flex gap-4 px-20 py-20 flex-wrap ">
            <div className="Cards relative flex-grow-[2] bg-[#004D43] h-[55vh] rounded-xl">
                <h1 className="  z-[999] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] text-7xl tracking-tighter font-semibold">ochi</h1>
               <button className=" absolute bottom-10 left-6 text-[#CDEA68] px-6 py-2 border-[1px] border-[#CDEA68] rounded-full">@2019-2022</button>
            </div>
            <div className="Cards flex-grow-[1] bg-[#212121] h-[55vh] rounded-xl"></div>
            <div className="Cards flex-grow-[1] bg-[#212121] h-[55vh] rounded-xl"></div>
        </div>
    </div>
  )
}

export default Cards