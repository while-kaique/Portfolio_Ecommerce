
import PropTypes from 'prop-types';

const ColorBall = ({color}) => {
  console.log(color)
  var isOne = true
  var colorVariants = {
    blue: 'bg-blue-700',
    black: 'bg-black',
    red: 'bg-red-700',
    yellow: 'bg-yellow-700',
    gray: 'bg-gray-700',
    green: 'bg-green-700',
    orange: 'bg-orange-700'
  }

  if (color.two) {
    isOne = false
  }
  return (
    <>
      <div className={`ball absolute ${isOne ? 'bottom-0' : 'bottom-10'}`}>
        <div className="colorBalls group relative // w-[1.2rem] h-[1.2rem]  hover:w-6 hover:h-6  // bg-white  // rounded-full // shadow-2xl //  transition-all ease-out">
            <div className= {`interBall // absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 // w-5 h-5 // ${isOne ? colorVariants[color.one] : colorVariants[color.two]} // border-2 border-white  // rounded-full group-hover:w-6 group-hover:h-6 hover:cursor-pointer transition-all ease-out`}> 
            </div>    
        </div>
      </div>
        
    </>
  )
}

ColorBall.propTypes = {  
    color: PropTypes.object,
};

export default ColorBall