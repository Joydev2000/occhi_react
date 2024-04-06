import React from 'react'

function Eyes() {
  return (
    <div className="w-full h-screen overflow-hidden">
        <div className="w-full relative h-screen bg-no-repeat bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]">
          <div className=" flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className=" flex items-center justify-center bg-white w-[15vw] h-[15vw] rounded-full">
                <div className=" bg-black w-2/3 h-2/3 flex items-center rounded-full">
                    <div className="line p-1 w-full h-10">
                        <div className="rounded-full w-7 h-7 bg-white"></div>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center bg-white w-[15vw] h-[15vw] rounded-full">
            <div className=" bg-black w-2/3 h-2/3 rounded-full flex items-center">
            <div className="line p-1 w-full h-10">
                        <div className="rounded-full w-7 h-7 bg-white"></div>
                    </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes