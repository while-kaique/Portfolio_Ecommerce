import { useEffect, useState } from "react";

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
            <div className="sliders absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-10">
                <label htmlFor="one" className="oneLabel absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%-45px)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors " onClick={cantChange}></label>
                <label htmlFor="two" className="twoLabel absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors" onClick={cantChange} ></label>
                <label htmlFor="three" className="threeLabel absolute -translate-x-1/2 -translate-y-1/2 bottom-0 left-[calc(50%+45px)] h-4 w-4 border-2 border-white rounded-full /// hover:bg-gray-800 hover:cursor-pointer transition-colors" onClick={cantChange} ></label>
            </div>


            {/* PARTE DO JORGE */}
            {/* PARTE DO JORGE */}
            {/* PARTE DO JORGE */}
            {/* PARTE DO JORGE */}


            </div>
            <div className="banner-2 w-full py-8 h-10 bg-gray-800 flex justify-center items-center font-['Mulish']">
            <div className="container  flex justify-center items-center gap-5">
                <div className="banner flex justify-center items-center w-72  text-xs gap-2">
                <div>
                    <a href="#">img</a>
                </div>
                <div>
                    <h4 className="title font-extrabold text-white">Fretes grátis</h4>
                    <p className="title-2 font-extralight text-slate-50 ">Para compras acima de <span className="value text-white font-semibold ">R$ 239</span>  </p>
                </div>
                </div> 

            <div className="banner-3 flex justify-center items-center w-72  text-xs gap-2">
                <div>
                <a href="#">img</a>
                </div>
                <div>
                <h4 className="title-9 font-extrabold text-white">Troca grátis</h4>
                <p className="title-3 font-extralight text-slate-50 ">na primeira compra</p>
                </div>
                </div> 
                <div className="banner-4 flex justify-center items-center w-72 text-xs gap-2">
                    <div>
                    <a href="#">img</a>
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