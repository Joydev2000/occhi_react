import React, { useEffect, useRef, useState } from "react";

function Eyes() {

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {

      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });

  }, []);
  
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full relative bg-fixed h-screen bg-no-repeat bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]">
        <div className=" flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className=" relative  flex items-center justify-center bg-white w-[15vw] h-[15vw] rounded-full cursor-pointer">
            <div className="relative bg-black w-2/3 h-2/3 flex items-center rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line p-1 w-full h-10"
              >
                <div className="rounded-full w-7 h-7 bg-white"></div>
              </div>
            </div>
            <h2 className="text-white text-3xl font-regular uppercase  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              play
            </h2>
          </div>
          <div className=" flex items-center justify-center bg-white w-[15vw] h-[15vw] rounded-full">
            <div className="relative bg-black w-2/3 h-2/3 rounded-full flex items-center cursor-pointer">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line p-1 w-full h-10"
              >
                <div className="rounded-full w-7 h-7 bg-white"></div>
              </div>
              <h2 className="text-white text-3xl font-regular uppercase  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                play
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
