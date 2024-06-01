import Slider_Main from "../sub_components_pages/Slider_Main";

const Home = () => {
  return (
    <>
      <main>
        <Slider_Main/>

        <div className="banner-2 w-full h-10 bg-gray-800 flex justify-center items-center ">
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
      </main> 
    </>
  )
}

export default Home