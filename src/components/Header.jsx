import { FiSearch } from "react-icons/fi";
import { PiUserBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";


import { useState } from "react";
import Category from "./Category";

const Header = () => {

  const [hamburguer, setHamburguer] = useState([false,'close'])
  const [menu, setMenu] = useState([false,'close'])
  
  const [categories] = useState( /// Vai ser um objeto JSON retornado de uma requisição
    [
      {title: 'Mais Desejados', categs: ['EM ALTA', 'VER TUDO']}, 

      {title: 'Meninos', categs: ['CATEGORIAS', 'VER TUDO']},  

      {title: 'Meninas', categs: ['CATEGORIAS', 'VER TUDO']}, 

      {title: 'Bebês', categs: ['MENINAS', 'MENINOS', 'VER TUDO']}, 

      {title: 'Pijamas', categs: ['MENINAS', 'MENINOS', 'VER TUDO']}, 

      {title: 'Bazar', categs: ['MENINAS', 'MENINOS', 'VER TUDO']}, 

    ]
  )

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
          <div className={`menu // ${menu[0] ? 'fixed -right-3 overflow-y-scroll' : 'fixed right-full'} ease-in-out duration-700 // block md:hidden // w-screen h-screen // bg-white // z-20`}>
            {/* Primeira div com Logo e Close MENU ABERTO*/}
            <div className="topMenu // flex justify-between items-center // w-full px-8 h-16 // m-auto mt-2 // border-b border-1">
              <a href="#" className="block // w-24 h-8 // bg-gray-400">logo</a>
              <IoClose className="w-12 h-12 text-index-blue cursor-pointer" onClick={toggleMenu}></IoClose>
            </div>
            {/* Primeira div com Logo e Close MENU ABERTO*/}


            {/* Convite para Registrar-se MENU ABERTO*/}
            <section className="flex items-center // w-full p-7 cursor-pointer ">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="27.5" stroke="#EAB606" strokeDasharray="2 2"></circle><rect x="5.41919" y="5.41937" width="45.1613" height="45.1613" rx="22.5807" fill="#F7CE45" fillOpacity="0.2"></rect><path d="M23.3787 22.8195C23.3787 25.3453 25.4422 27.4028 27.9999 27.4028C30.5576 27.4028 32.6211 25.3453 32.6211 22.8195C32.6211 20.2936 30.5576 18.2361 27.9999 18.2361C25.4422 18.2361 23.3787 20.2936 23.3787 22.8195Z" stroke="#EAB606" strokeWidth="1.66667"></path><path d="M18.8331 34.0833C18.8331 34.9622 18.9404 35.5592 19.1519 35.9887C19.3479 36.3869 19.6674 36.7097 20.2545 36.9747C20.8686 37.2519 21.7568 37.4562 23.0463 37.5855C24.3279 37.7141 25.9492 37.7639 27.9998 37.7639C30.0504 37.7639 31.6717 37.7141 32.9533 37.5855C34.2428 37.4562 35.131 37.2519 35.745 36.9747C36.3322 36.7097 36.6516 36.3869 36.8477 35.9887C37.0592 35.5592 37.1665 34.9622 37.1665 34.0833C37.1665 33.2046 37.0592 32.6075 36.8477 32.178C36.6516 31.7797 36.3322 31.457 35.745 31.192C35.131 30.9148 34.2428 30.7106 32.9533 30.5812C31.6717 30.4527 30.0504 30.4028 27.9998 30.4028C25.9492 30.4028 24.3279 30.4527 23.0463 30.5812C21.7568 30.7106 20.8686 30.9148 20.2545 31.192C19.6674 31.457 19.3479 31.7797 19.1519 32.178C18.9404 32.6075 18.8331 33.2046 18.8331 34.0833Z" stroke="#EAB606" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg>

              <section className="register // ml-5">
                <h1 className="font-bold">Entre ou Cadastre-se</h1>
                <h2>Meus Pedidos, Perfil e muito mais!</h2>
              </section>
            </section>
            {/* Convite para Registrar-se MENU ABERTO*/}
            

            {/* Section com texto MENU ABERTO*/}
              <section className="details bg-zinc-200 w-full py-3">
                <h1 className="font-semibold ml-7">Navegue por Categorias</h1>
              </section>
            {/* Section com texto MENU ABERTO*/}

            
            <div className="filter2 // flex flex-col flex-wrap // w-full // bg-gray-100 h-full">  
                  <section className="">
                    <ul className="">
                      {categories.map((category, key)=>{
                        return(
                          <Category key={key} category={category} header={true} font={'header'}/>
                        )
                      })}
                    </ul>
                  </section>
                </div>
          </div>
          <div className={`menuFilm fixed block md:hidden -right-3 w-screen h-screen ease-in transit duration-300 // 
            ${menu[0] ? 
            'z-10 bg-zinc-400 opacity-50' : 
            'bg-transparent right-full -z-10'}`}>
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
