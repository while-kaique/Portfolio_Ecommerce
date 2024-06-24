

import PropTypes from 'prop-types';
import ColorBall from "../sub_components_pages/ColorBall";
import { useEffect, useState } from 'react';

const ProductCard = ({product, isOdd}) => {
    const [screenWidth, setScreenWidth] = useState(0)

    const parcels = product.parcels
    const cost = product.cost

    const maxParcelValue = cost / parcels

    function updateScreenWidth() {
        setScreenWidth(window.innerWidth)
    }

    // Função para atualizar a largura da tela
    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    },[])

    setTimeout(() => {
        console.log(screenWidth <= 1024)
    }, 2000);
    
    window.addEventListener('resize', updateScreenWidth);
      
  return (
    <div className={`${screenWidth <= 1024 ? isOdd : ''}`}>
        <div className={`flex flex-col items-center // bg-[#F5F1F2] // shadow-md h-72 sm:h-96 // grid-rows-1`}>
            <div className="img // relative // w-5/6  h-4/6 sm:h-3/5 md:h-2/3 // bg-productTestImage bg-contain bg-no-repeat bg-center">
                <div className="colorBalls flex flex-col justify-end items-center gap-3 // absolute bottom-2 -right-10 -translate-x-1/2 // h-full w-10">
                    {product.colors.map((color, key)=>{
                        return <ColorBall key={key} color={color}/>
                    })}
                </div>
            </div>
            <section className="info // bg-white w-full // flex flex-col gap-4 justify-center items-center// h-2/6 sm:h-2/5 md:h-1/3">
                <h1 className="text-center text-base text-gray-500">{product.title}</h1>
                <div className="cost flex justify-center gap-3">
                    <p className="text-center text-xs font-bold text-gray-900">{`R$ ${product.cost}0`}</p>  
                    <p className="text-center text-xs font-bold text-gray-400">{`${product.parcels}x de R$${maxParcelValue.toFixed(2)}`}</p>  
                </div>

            </section>

        </div>

    </div>
  )
}

ProductCard.propTypes = {  
    product: PropTypes.object,
    isOdd: PropTypes.string,
};

export default ProductCard