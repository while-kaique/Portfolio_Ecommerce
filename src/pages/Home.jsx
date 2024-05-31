

const Home = () => {
  return (
    <>
      <main className="w-ful">
        <div className="slider relative overflow-hidden">
          <input type="radio" name="radio1" id="radio1" className="absolute bottom-1 left-[calc(50%-25px)]"/>
          <input type="radio" name="radio2" id="radio2" className="absolute bottom-1 left-[calc(50%)]"/>
          <input type="radio" name="radio3" id="radio3" className="absolute bottom-1 left-[calc(50%+25px)]"/>

          <div className="slides flex w-[400%]">
            <img src="/images/banner.webp" alt="banner" className="w-1/4"></img>
            <img src="/images/banner.webp" alt="banner" className="w-1/4"></img>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home