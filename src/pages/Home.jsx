import { useEffect, useState } from "react";

const Home = () => {
  const [countRadio, setCountRadio] = useState(1)
  const [canChange, setCanChange] = useState(true)

  useEffect(()=>{
    if (canChange) {
      setTimeout(() => {
        setCountRadio(countRadio + 1)
        if (countRadio > 2) {
          setCountRadio(1)
        }
        
        const radio = document.querySelector(`.radio${countRadio}`)
        radio.checked = true
      }, 5000);
    }
  }, [countRadio, canChange])

  function cantChange(){
    setCanChange(false)
  }

  return (
    <>
      <main className="relative">
        <div className="slider relative w-screen h-[276px]">
          <input type="radio" name="slide" id="one" className="radio1 hidden" defaultChecked/>
          <input type="radio" name="slide" id="two" className="radio2 hidden" />
          <input type="radio" name="slide" id="three" className="radio3 hidden" />

          <div className="absolute image w-full h-full">
            <img src="/images/banner1.png" alt="banner" className=" w-full h-full object-cover img-1 "></img>
          </div>
          <div className="absolute image w-full h-full">
            <img src="/images/banner2.webp" alt="banner" className=" w-full h-full object-cover img-2"></img>
          </div>
          <div className="absolute image w-full h-full">
            <img src="/images/banner3.webp" alt="banner" className=" w-full h-full object-cover img-3"></img>
          </div>
          <div className="sliders absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-10">
            <label htmlFor="one" className="oneLabel absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%-45px)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors " onClick={cantChange}></label>
            <label htmlFor="two" className="twoLabel absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors" onClick={cantChange} ></label>
            <label htmlFor="three" className="threeLabel absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%+45px)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors" onClick={cantChange} ></label>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home