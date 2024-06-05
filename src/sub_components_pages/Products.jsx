import { useState } from "react";

import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

const Products = () => {

  const [categories, setCategorias] = useState( /// Vai ser um objeto JSON retornado de uma requisição
    [
      {title: 'Meninas', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']}, 

      {title: 'Meninos', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']}, 

      {title: 'Bebês', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},

      {title: 'Pijamas', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},

      {title: 'Linha', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},

    ]
  )

  const [bestProducts, setBestProducts] = useState(
    [
      {title: 'Conjunto A', cost: 99.90, parcels: 2, colors: ['yellow-700', 'gray-800']}, 
      {title: 'Conjunto B', cost: 199.90, parcels: 3, colors: ['red-600', 'orange-800']}, 
      {title: 'Conjunto C', cost: 29.90, parcels: 6, colors: ['black', 'orange-800']}, 
      {title: 'Conjunto A', cost: 99.90, parcels: 2, colors: ['yellow-100', 'gray-700']}, 
      {title: 'Conjunto B', cost: 199.90, parcels: 3, colors: ['red-600', 'green-700']}, 
      {title: 'Conjunto C', cost: 29.90, parcels: 6, colors: ['black', 'orange-800']}, 
      {title: 'Conjunto A', cost: 99.90, parcels: 2, colors: ['yellow-700', 'gray-700']}, 
      {title: 'Conjunto B', cost: 199.90, parcels: 3, colors: ['red-600', 'green-700']}, 
      {title: 'Conjunto C', cost: 29.90, parcels: 6, colors: ['black', 'orange-400']}, 
    ]
  )


  return (
    <>
        <section className="products">
            <div className="jorge flex justify-around items-center border-2 border-red-500">
                <div></div>
                <h1 className="">Lorem ipsum dolor sit amet.</h1>
                <div className="filter1 bg-black w-10 h-10"></div>
            </div>

            <div className="kaique // w-[90%] m-auto mt-10 flex justify-center gap-5 // ">
                <div className="filter2 // flex flex-col flex-wrap // w-1/4 // bg-gray-100 h-full">  
                  <section className="">
                    <ul className="">
                      {categories.map((category, key)=>{
                        return(
                          <Category key={key} category={category} />
                        )
                      })}
                    </ul>
                  </section>
                </div>

                <div className="products w-3/4 grid grid-cols-3 gap-4 grid-rows-3">
                  {bestProducts.map((product, key)=>{
                    return(
                      <ProductCard key={key} product={product}/>
                    )
                  })}
                </div>
            </div>

        </section>
    </>
  )
}

export default Products