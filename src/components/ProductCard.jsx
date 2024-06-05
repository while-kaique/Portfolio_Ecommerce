

import PropTypes from 'prop-types';
import ColorBall from "../sub_components_pages/ColorBall";

const ProductCard = ({product}) => {

    const parcels = product.parcels
    const cost = product.cost

    const maxParcelValue = cost / parcels
  
  return (
    <>
        <div className="flex flex-col items-center // bg-[#F5F1F2] // shadow-md h-96 // grid-rows-1">
            <div className="img // relative // w-5/6 m-auto h-2/3 // bg-productTestImage bg-contain bg-no-repeat">
                <div className="colorBalls flex flex-col justify-end items-center gap-3 // absolute bottom-2 -right-10 -translate-x-1/2 // h-full w-10">
                    {product.colors.map((color, key)=>{
                        return <ColorBall key={key} color={color}/>
                    })}
                </div>
            </div>
            <section className="info // bg-white w-full // flex flex-col gap-4 justify-center items-center// h-1/4">
                <h1 className="text-center text-base text-gray-500">{product.title}</h1>
                <div className="cost flex justify-center gap-5">
                    <p className="text-center text-xs font-bold text-gray-900">{`R$ ${product.cost}0`}</p>  
                    <p className="text-center text-xs font-bold text-gray-400">{`${product.parcels}x de R$${maxParcelValue.toFixed(2)}`}</p>  
                </div>
            </section>
        </div>
    </>
  )
}

ProductCard.propTypes = {  
    product: PropTypes.object,
};

export default ProductCard