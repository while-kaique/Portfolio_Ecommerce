import { useState } from "react";

import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

const Products = () => {

  const [categories] = useState( /// Vai ser um objeto JSON retornado de uma requisição
    [
      {title: 'Meninas', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']}, 

      {title: 'Meninos', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']}, 

      {title: 'Bebês', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},

      {title: 'Pijamas', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},

      {title: 'Linha', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},

    ]
  )


  /// PRODUTOS
  const [hiddenBottom, setHiddenBottom] = useState(false)
  const [productsLimiter, setProductsLimiter] = useState(2)
  const [bestProducts] = useState(
    [
      {title: 'Conjunto A', cost: 99.90, parcels: 2, colors: [{one:'yellow'}, {two:'gray'}]}, 
      {title: 'Conjunto B', cost: 199.90, parcels: 3, colors: [{one:'red'}, {two:'orange'}]}, 
      {title: 'Conjunto C', cost: 29.90, parcels: 6, colors: [{one:'black'}, {two:'orange'}]}, 
      {title: 'Conjunto A', cost: 99.90, parcels: 2, colors: [{one:'yellow'}, {two:'gray'}]}, 
      {title: 'Conjunto B', cost: 199.90, parcels: 3, colors: [{one:'red'}, {two:'green'}]}, 
      {title: 'Conjunto C', cost: 29.90, parcels: 6, colors: [{one:'black'}, {two:'orange'}]}, 
      {title: 'Conjunto A', cost: 99.90, parcels: 2, colors: [{one:'yellow'}, {two:'gray'}]}, 
      {title: 'Conjunto B', cost: 199.90, parcels: 3, colors: [{one:'red'}, {two:'green'}]}, 
      {title: 'Conjunto C', cost: 29.90, parcels: 6, colors: [{one:'black'}, {two:'orange'}]}, 
    ]
  )
  /// PRODUTOS


  function addLimit(){
    if ( (productsLimiter + 3) >= (bestProducts.length - 1) ){
      setHiddenBottom(true)
    }
    setProductsLimiter(productsLimiter + 3)
  }

  const getLastRowClass = () => {
    if ((productsLimiter + 1) % 2 === 1){
      return 'col-span-2'
    }
    return '';
  };  


  return (
    <>
        <section className="products">
            <div className="filter box flex flex-wrap justify-center gap-14 lg:gap-0 items-center  border-gray-500 w-[90%]">
                <div className="hidden sm:block md:w-1/12 lg:w-1/4 h-2"></div>
                <h1 className="text-center text-base font-base lg:text-lg w-2/4 md:w-2/4">Descubra os produtos por ordenação e categoria!</h1>
                <div className="filter1 w-1/4 flex items-center h-20 gap-2 ">
                  <h3 className="hidden md:inline">Ordenação:</h3>

                  <select className="filter-select // w-44 h-8 // bg-gray-100 // rounded // outline outline-gray-200 outline-1 // text-sm">
                      <option value="someOption" className="text-xs">Destaques</option>
                      <option value="someOption" className="text-xs">Menor Preço</option>
                      <option value="someOption" className="text-xs">Maior Preço</option>
                      <option value="someOption" className="text-xs">Mais Vendidos</option>
                      <option value="someOption" className="text-xs">A - Z</option> 
                      <option value="someOption" className="text-xs">Data de Lançamento</option> 
                  </select>
                </div>
            </div>

            <div className="kaique // w-full md:w-[90%] mx-0 md:mr-auto md:ml-6 mt-10 flex justify-center gap-5 // ">
                <div className="filter2 // hidden md:flex flex-col flex-wrap // w-1/4 // bg-gray-100 h-full">  
                  <section className="">
                    <ul className="">
                      {categories.map((category, key)=>{
                        return(
                          <Category key={key} category={category} header={false} font={'produtcs'}/>
                        )
                      })}
                    </ul>
                  </section>
                </div>

                <div className={`products w-11/12 md:w-3/4 grid gap-4 grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-rows-1`}>
                  {bestProducts.map((product, key)=>{
                    if (key <= productsLimiter){
                      if (key === productsLimiter){
                        return <ProductCard isOdd={getLastRowClass()} key={key} product={product}/>
                      }
                      return <ProductCard isOdd={''} key={key} product={product}/>
                    }
                    return
                  })}
                </div>
            </div>
        </section>

      <div className='button w-full h-20 flex justify-center items-center'>
        <button className={` transition ease-out // ${hiddenBottom ? 'bg-transparent hover:bg-transparent text-black font-semibold cursor-text' : 'bg-cyan-500 hover:bg-cyan-700'} duration-200 text-white py-2 px-7 mt-16`} onClick={()=>{if(hiddenBottom) {return} else {addLimit()}}}>{hiddenBottom ? 'Não há mais produtos para mostrar...' : 'Mostrar mais'}</button>
      </div>
    </>
  )
}

export default Products

