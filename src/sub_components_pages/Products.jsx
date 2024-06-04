import { MdOutlineExpandMore } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";
import { useState } from "react";

const Products = () => {

  const [close, setClose] = useState([true, true, true, true, true])

  function handleIcon(index){
    let newList = [...close]
    console.log(close, 'ESSE É O CLOSE')
    newList[index] = !newList[index]
    console.log(newList,  'esse é agora')
    setClose(newList)
  }

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
                      <li className="MENINAS min-h-12 ">
                        <input className="inp" type="checkbox" name="meninas" id="meninas"> 
                        </input>
                          
                        <label htmlFor="meninas" className="h-12 block // border-[1px] // hover:cursor-pointer" onClick={()=>{handleIcon(0)}}>
                          <div className="label // flex justify-between items-center // w-4/5 h-full // m-auto">
                            <h1 className="w-2/3 font-bold text-gray-800">Meninas</h1>
                            {close[0] ? <MdOutlineExpandMore/> : <IoRemoveOutline/>}
                          </div>
                        </label>

                          <ul className="content bg-white text-gray-400 font-light">
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Blusas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Calças e Leggins</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Casacos e Jaquetas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Conjuntos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Shorts</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Saias</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Vestidos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninas/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                          </ul>
                      </li>
                      <li className="MENINOS min-h-12 ">
                        <input className="inp" type="checkbox" name="meninos" id="meninos"> 
                        </input>
                          
                        <label htmlFor="meninos" className="h-12 block // border-[1px] border-t-0 // hover:cursor-pointer" onClick={()=>{handleIcon(1)}}>
                          <div className="label // flex justify-between items-center // w-4/5 h-full // m-auto">
                            <h1 className="w-2/3 font-bold text-gray-800">Meninos</h1>
                            {close[1] ? <MdOutlineExpandMore/> : <IoRemoveOutline/>}
                          </div>
                        </label>

                          <ul className="content bg-white text-gray-400 font-light">
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Blusas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Calças e Leggins</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Casacos e Jaquetas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Conjuntos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Shorts</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Saias</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Vestidos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/meninos/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                          </ul>
                      </li>
                      <li className="BEBES min-h-12 ">
                        <input className="inp" type="checkbox" name="bebes" id="bebes"> 
                        </input>
                          
                        <label htmlFor="bebes" className="h-12 block // border-[1px] border-t-0 hover:cursor-pointer" onClick={()=>{handleIcon(2)}}>
                          <div className="label // flex justify-between items-center // w-4/5 h-full // m-auto">
                            <h1 className="w-2/3 font-bold text-gray-800">Bebês</h1>
                            {close[2] ? <MdOutlineExpandMore/> : <IoRemoveOutline/>}
                          </div>
                        </label>

                          <ul className="content bg-white text-gray-400 font-light">
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Blusas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Calças e Leggins</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Casacos e Jaquetas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Conjuntos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Shorts</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Saias</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Vestidos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/bebes/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                          </ul>
                      </li>
                      <li className="PIJAMAS min-h-12 ">
                        <input className="inp" type="checkbox" name="pijamas" id="pijamas"> 
                        </input>
                          
                        <label htmlFor="pijamas" className="h-12 block // border-[1px] border-t-0 hover:cursor-pointer" onClick={()=>{handleIcon(3)}}>
                          <div className="label // flex justify-between items-center // w-4/5 h-full // m-auto">
                            <h1 className="w-2/3 font-bold text-gray-800">Pijamas</h1>
                            {close[3] ? <MdOutlineExpandMore/> : <IoRemoveOutline/>}
                          </div>
                        </label>

                          <ul className="content bg-white text-gray-400 font-light">
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Blusas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Calças e Leggins</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Casacos e Jaquetas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Conjuntos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Shorts</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Saias</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Vestidos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/pijamas/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                          </ul>
                      </li>
                      <li className="LINHAS min-h-12 ">
                        <input className="inp" type="checkbox" name="linhas" id="linhas"> 
                        </input>
                          
                        <label htmlFor="linhas" className="h-12 block // border-[1px] border-t-0 hover:cursor-pointer" onClick={()=>{handleIcon(4)}}>
                          <div className="label // flex justify-between items-center // w-4/5 h-full // m-auto">
                            <h1 className="w-2/3 font-bold text-gray-800">Linhas</h1>
                            {close[4] ? <MdOutlineExpandMore/> : <IoRemoveOutline/>}
                          </div>
                        </label>

                          <ul className="content bg-white text-gray-400 font-light">
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Blusas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Calças e Leggins</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Casacos e Jaquetas</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Conjuntos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Shorts</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Saias</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Vestidos de Verão</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                            <li className="optionFilter px-8 h-12 m-auto">
                              <div className="options flex justify-between items-center h-full border-[#dfe4ef]">
                                <a className="w-2/3" href="/infantil/linhas/calcas-e-leggings"><span>Conjuntos de Inverno</span></a>
                                <div className="void"></div>
                              </div>
                            </li>
                          </ul>
                      </li>
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