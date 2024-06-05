
import PropTypes from 'prop-types';

const ColorBall = ({color}) => {
    const strColor = 'bg-' + color
  return (
    <>
        <div className="colorBalls relative // w-5 h-5  // bg-white  // rounded-full // shadow-2xl">
            <div className={`interBall // absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 // w-4 h-4 // ${strColor} // rounded-full hover:w-[20px] hover:h-[20px] hover:cursor-pointer transition-all ease-out`}>
            </div>
        </div>
        
    </>
  )
}

ColorBall.propTypes = {  
    color: PropTypes.string,
};

export default ColorBall