import { useState } from "react";

import Category from "../components/Category";

const Products = () => {

  const [categories, setCategorias] = useState(
    [
      {title: 'Meninas', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']}, 
      
      {title: 'Meninos', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']}, 
      
      {title: 'Bebês', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},
      
      {title: 'Pijamas', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},
      
      {title: 'Linha', categs: ['Blusas', 'Calças e Leggins',' Casacos e Jaquetas', 'Conjuntos de Verão', 'Conjuntos de Inverno', 'Shorts', 'Saias', 'Vestidos de Verão', 'Vestidos de Inverno']},
      
    ]
  )


  return (
    <>
        <section className="products w-100%">
            <div className="jorge flex justify-around items-center border-2 border-red-500">
                <div></div>
                <h1 className="">Lorem ipsum dolor sit amet.</h1>
                <div className="filter1 bg-black w-10 h-10"></div>
            </div>

            <div className="kaique // w-full flex justify-center gap-5 // p-10">
                <div className="filter2 // flex flex-col flex-wrap // w-[25%] // bg-gray-100 h-full">  
                  <section className="">
                    <ul className="">
                      {categories.map((category, key)=>{
                        return(
                          <Category key={key} category={categories[key]} />
                        )
                      })}
                    </ul>
                  </section>
                </div>
                <div className="products w-3/5 h-[300px] bg-red-300">
                </div>


            </div>

        </section>
    </>
  )
}

export default Products