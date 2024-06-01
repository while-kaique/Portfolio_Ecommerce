import Slider_Main from "../sub_components_pages/Slider_Main";
import Products from "../sub_components_pages/Products";

const Home = () => {
  return (
    <>
      <main className="h-[200%]">
        <Slider_Main/>
        <Products/>
      </main> 
    </>
  )
}

export default Home