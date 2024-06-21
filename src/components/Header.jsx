import { FiSearch } from "react-icons/fi";
import { PiUserBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";


import { useState } from "react";

const Header = () => {
  const [hamburguer, setHamburguer] = useState([false,'close'])
  const [menu, setMenu] = useState([false,'close'])

  function toggleMenu(){
      if (hamburguer[0] === false){
          setHamburguer([true,'open'])
          setMenu([true,'open'])
          console.log(hamburguer)
          console.log(menu)
          return
      }
      setHamburguer([false,'close'])
      setMenu([false,'close'])
      console.log(hamburguer[1], 'FINAL')
      console.log(menu[1], 'FINAL')
  }

  return (
    <>
      <header className=" w-full h-1/5 z-10 font-['Mulish'] bg-white fixed">

        <div className=" relative
        mobile___ /// justify-between flex-wrap
        desktop___ /// flex md:flex-row md:justify-around md:items-center w-11/12 m-auto h-3/4">

          
          {/* Hamburguer MOBILE MENU */}
          <div className={`hamburguer ${hamburguer[1]} relative my-3
            desktop___ /// md:hidden
            mobile___ /// // flex flex-col// cursor-pointer // w-12 h-12 // group // `} onClick={toggleMenu}>
              <div className={`bar1 absolute w-10 h-1 bg-index-blue group-hover:bg-cyan-600 // // rounded-lg // -translate-x-1/2 -translate-y-[calc(50%-5px)] top-1/2 left-1/2`}></div>
              <div className={`bar2 absolute w-10 h-1 bg-index-blue group-hover:bg-cyan-600 // // rounded-lg // -translate-x-1/2 -translate-y-[calc(50%+5px)] top-1/2 left-1/2`}></div>
          </div>
          {/* Hamburguer MOBILE MENU */}
          
          {/* Menu aberto MOBILE MENU */}
          <div className={`menu // ${menu[0] ? 'fixed -right-3 ' : 'fixed right-full'} ease-in-out duration-700 // block md:hidden // w-screen h-screen // bg-white // z-10`}>
            <div className="topMenu // flex justify-between items-center // w-full px-8 h-16 // m-auto mt-2 // border-b border-1">
              <a href="#" className="block // w-24 h-8 // bg-gray-400">logo</a>
              <IoMdClose className="w-12 h-12 text-index-blue cursor-pointer" onClick={toggleMenu}></IoMdClose>
            </div>
          </div>
          <div className={`menuFilm fixed block md:hidden -right-3 // ${menu[0] ? 'z-10 bg-zinc-400' : 'bg-transparent'} w-screen h-screen ease-in duration-300 -z-10`}>
          </div>
          {/* Menu aberto MOBILE MENU */}

          
          {/* Logo */}
          <a href="#" className="mobile___ /// my-3
          desktop___ /// md:mt-0 w-24 h-12 bg-gray-400">logo</a>
          <div className="cartDiv md:hidden relative my-3">
            <PiShoppingCartSimpleBold className="cart h-12  text-2xl text-index-blue cursor-pointer z-0" >
            </ PiShoppingCartSimpleBold >
            <div className="cartCounter absolute top-1 -right-1/2 w-4 h-4 rounded-full bg-zinc-800 text-white text-xs text-center z-0 ">0</div>
          </div>
          {/* Logo */}
    
          {/* Barra de pesquisa */}
          <div className="searcher relative w-10/12 m-auto md:w-auto md:m-0 ">
            <input
              type="text"
              className="bg-gray-200 w-full md:w-64 lg:w-[450px] rounded-lg focus:outline-none p-2 pl-5 text-gray-500"
              placeholder="Pesquisar ">
            </input>
            <FiSearch className="absolute right-1 top-1/2 p-1.5 text-3xl bg-gray-800 text-white rounded-lg -translate-y-1/2 cursor-pointer" ></FiSearch >
          </div>
          {/* Barra de pesquisa */}

          {/* Ícones */}
          <div className="icons md:flex justify-between hidden gap-4 lg:gap-16">
            <div className="user relative cursor-pointer flex">
              <PiUserBold className="absolute user top-1/2 p-0.5 text-2xl text-index-blue rounded-lg -translate-y-1/2  cursor-pointer" ></PiUserBold >
              <p className="font-bold text-gray-900 text-base pl-7">Entre ou Cadastre-se</p>
            </div>

            <div className="cart relative cursor-pointer flex">
              < PiShoppingCartSimpleBold className="absolute cart top-1/2 p-0.5 text-2xl text-index-blue rounded-lg -translate-y-1/2  cursor-pointer" ></ PiShoppingCartSimpleBold >
              <p className="font-bold text-gray-900 text-base pl-7">Meu Carrinho</p>
            </div>
          </div>
          {/* Ícones */}

          
          {/* DIV de espaçamento (NÃO COLOCAR NADA DENTRO) */}
          <div className="void hidden md:block"></div>
          {/* DIV de espaçamento (NÃO COLOCAR NADA DENTRO) */}
        </div>
        <nav className="h-1/4 flex items-end">
          <ul className="w-3/5 h-full mx-auto flex justify-center uppercase font-bold font-['Mulish'] relative z-10">
            <li className="relative ul_li hidden px-3 md:list-item lg:px-5 ">
              <h1 className="hover:cursor-pointer">Mais Desejados</h1>
              <div className="submenu_maisDesejados ">
                <ul>
                  <h1>
                    <a href="#">opção 1</a>
                  </h1>
                  <li>
                    <a href="#">Lorem ipsum dolor sit.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative ul_li hidden px-3 md:list-item lg:px-5 ">
              <h1 className="hover:cursor-pointer">bebês</h1>
              <div className="submenu_maisDesejados">
                <div className="double_ul">
                  <ul>
                    <h1>
                      <a href="#">opção 1</a>
                    </h1>
                    <li>
                      <a href="#">Lorem ipsum dolor sit.</a>
                    </li>
                    <li>
                      <a href="#">Lorem, ipsum.</a>
                    </li>
                    <li>
                      <a href="#">Lorem, ipsum dolor.</a>
                    </li>
                    <li>
                      <a href="#">Lorem.</a>
                    </li>
                  </ul>
                  <ul>
                    <h1>
                      <a href="#">opção 1</a>
                    </h1>
                    <li>
                      <a href="#">Lorem ipsum dolor sit.</a>
                    </li>
                    <li>
                      <a href="#">Lorem, ipsum.</a>
                    </li>
                    <li>
                      <a href="#">Lorem, ipsum dolor.</a>
                    </li>
                    <li>
                      <a href="#">Lorem.</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="relative ul_li hidden px-3 md:list-item lg:px-5 ">
              <h1 className="hover:cursor-pointer">menina</h1>
              <div className="submenu_maisDesejados">
                <ul>
                  <h1>
                    <a href="#">opção 1</a>
                  </h1>
                  <li>
                    <a href="#">Lorem ipsum dolor sit.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative ul_li hidden px-3 md:list-item lg:px-5 ">
              <h1 className="hover:cursor-pointer">menino</h1>
              <div className="submenu_maisDesejados">
                <ul>
                  <h1>
                    <a href="#">opção 1</a>
                  </h1>
                  <li>
                    <a href="#">Lorem ipsum dolor sit.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative ul_li hidden px-3 md:list-item lg:px-5 ">
              <h1 className="hover:cursor-pointer">pijamas</h1>
              <div className="submenu_maisDesejados">
                <ul>
                  <h1>
                    <a href="#">opção 1</a>
                  </h1>
                  <li>
                    <a href="#">Lorem ipsum dolor sit.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative ul_li hidden px-3 md:list-item lg:px-5 ">
              <h1 className="hover:cursor-pointer">bazar</h1>
              <div className="submenu_maisDesejados">
                <ul>
                  <h1>
                    <a href="#">opção 1</a>
                  </h1>
                  <li>
                    <a href="#">Lorem ipsum dolor sit.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum dolor.</a>
                  </li>
                  <li>
                    <a href="#">Lorem.</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <div className="void h-1/5"></div>
    </>
  );
};

export default Header;
