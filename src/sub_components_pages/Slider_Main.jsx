import { useEffect, useState } from "react";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { TiArrowSync } from "react-icons/ti";
import { FaCcMastercard } from "react-icons/fa";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider_Main = () => {

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
        }, 7000);
      }
    }, [countRadio, canChange])
  
    function cantChange(){
      setCanChange(false)
    }

  return (
    <>
        <div className="slider relative w-screen h-[276px]">
            <input type="radio" name="slide" id="one" className="radio1 hidden" defaultChecked/>
            <input type="radio" name="slide" id="two" className="radio2 hidden" />
            <input type="radio" name="slide" id="three" className="radio3 hidden" />

            <div className="absolute image w-full h-full">
                <a href="#"><img src="/images/banner1.png" alt="banner" className=" w-full h-full object-cover img-1 "></img></a>
            </div>
            <div className="absolute image w-full h-full">
                <a href="#"><img src="/images/banner2.webp" alt="banner" className=" w-full h-full object-cover img-2"></img></a>
            </div>
            <div className="absolute image w-full h-full">
                <a href="#"><img src="/images/banner3.webp" alt="banner" className=" w-full h-full object-cover img-3"></img></a>
            </div>
            {/* {Desktop} */}
            <div className="sliders absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-0">
                <label htmlFor="one" className="oneLabel hidden md:block absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%-45px)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors  z-0" onClick={cantChange}></label>
                <label htmlFor="two" className="twoLabel hidden md:block absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors z-0" onClick={cantChange} ></label>
                <label htmlFor="three" className="threeLabel hidden md:block absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%+45px)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors z-0" onClick={cantChange} ></label>
            </div>
            {/* {Desktop} */}


            {/* {Mobile} */}
              <div className="oneSkip box-border block md:hidden absolute -translate-y-1/2 top-1/2 left-0 h-16 w-12 border-2 border-white rounded bg-gray-800 opacity-40 /// hover:opacity-100 transition-colors  z-0" 
              onClick={()=>{
                    if (canChange){
                      cantChange()
                    }
                    if ((countRadio - 1) < 1) {
                      setCountRadio(3)
                      const radio = document.querySelector(`.radio3`)
                      radio.checked = true
                    } else {
                      const radio = document.querySelector(`.radio${countRadio - 1}`)
                      setCountRadio(countRadio - 1)
                      radio.checked = true
                      console.log(countRadio)
                    }
              }}><IoIosArrowBack className="icon absolute // -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-4xl text-white"/></div>
              <div className="twoSkip box-border block md:hidden absolute -translate-y-1/2 top-1/2 right-0 h-16 w-12 border-2 border-white rounded bg-gray-800 opacity-40 /// hover:opacity-100 transition-colors z-0"
              onClick={()=>{
                    if (canChange){
                      cantChange()
                    }
                    if ((countRadio + 1) > 3) {
                      setCountRadio(1)
                      const radio = document.querySelector(`.radio1`)
                      radio.checked = true
                    } else {
                      const radio = document.querySelector(`.radio${countRadio + 1}`)
                      radio.checked = true
                      setCountRadio(countRadio + 1)
                      console.log(countRadio)
                    }
              }}><IoIosArrowForward className="icon absolute // -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-4xl text-white"/></div>
            {/* {Mobile} */}


            {/* PARTE DO JORGE */}
            {/* PARTE DO JORGE */}
            {/* PARTE DO JORGE */}
            {/* PARTE DO JORGE */}


            </div>
            <div className="banner-2 w-full py-8 h-10 bg-gray-800 flex justify-center items-center font-['Mulish']">
            <div className="container  flex justify-center items-center gap-5">
                <div className="banner flex justify-center items-center w-72  text-xs gap-2">
                <div>
                    <a href="#"><PiAirplaneTakeoffBold className="text-white text-2xl mr-1"/></a>
                </div>
                <div>
                    <h4 className="title font-extrabold text-white">Fretes grátis</h4>
                    <p className="title-2 font-extralight text-slate-50 ">Para compras acima de <span className="value text-white font-semibold ">R$ 239</span>  </p>
                </div>
                </div> 

            <div className="banner-3 flex justify-center items-center w-72  text-xs gap-2">
                <div>
                <a href="#"><TiArrowSync className="text-white text-2xl mr-1 "/></a>
                </div>
                <div>
                <h4 className="title-9 font-extrabold text-white">Troca grátis</h4>
                <p className="title-3 font-extralight text-slate-50 ">na primeira compra</p>
                </div>
                </div> 
                <div className="banner-4 flex justify-center items-center w-72 text-xs gap-2">
                    <div>
                    <a href="#"><FaCcMastercard className="text-white text-2xl mr-1  "/></a>
                    </div>
                    <div>
                    <h4 className="title-10 font-extrabold text-white">Parcele sem juros</h4>
                    <p className="title-4 font-extralight text-slate-50 ">Em até <span className="value-3 text-white font-semibold ">6x</span>  </p>
                    </div>
                </div>
                </div>
            </div> 
    </>
  )
}

export default Slider_Main