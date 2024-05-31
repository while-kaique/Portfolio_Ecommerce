import { FiSearch } from "react-icons/fi";
import { PiUserBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Header = () => {
  return (
    <header className=" w-full h-1/5 shadow-navbar z-10 font-['Mulish']">
      <div className=" flex justify-around items-center w-full h-3/4">
        <a href="#" className="w-24 h-12 bg-gray-400">logo</a>
        <div className="searcher relative">
          <input
            type="text"
            className="bg-gray-200 w-[450px] rounded-lg focus:outline-none p-2 pl-5 text-gray-500"
            placeholder="Pesquisar ">
           </input>
          <FiSearch className="absolute right-1 top-1/2 p-1.5 text-3xl bg-gray-800 text-white rounded-lg -translate-y-1/2 cursor-pointer" ></FiSearch >
        </div>

        <div className="icons  flex justify-around gap-5 ">
          <div className="user relative cursor-pointer flex gap-3">
             <PiUserBold className="absolute user -left-7 top-1/2 p-0.5 text-2xl text-index-blue rounded-lg -translate-y-1/2  cursor-pointer" ></PiUserBold >
            <p className="font-bold text-gray-900 text-base">Entre ou Cadastre-se</p>
          </div>

          <div className="cart relative ml-16 cursor-pointer flex gap-3">
             < PiShoppingCartSimpleBold className="absolute cart -left-7 top-1/2 p-0.5 text-2xl text-index-blue rounded-lg -translate-y-1/2  cursor-pointer" ></ PiShoppingCartSimpleBold >
            <p className="font-bold text-gray-900 text-base">Meu Carrinho</p>
          </div>
        </div>
        <div></div>
      </div>
      <nav className="h-1/4 flex items-end">
        <ul className="w-3/5 mx-auto flex justify-center uppercase font-bold font-['Mulish'] relative z-10">
          <li className="relative ul_li">
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
          <li className="relative ul_li">
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
          <li className="relative ul_li">
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
          <li className="relative ul_li">
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
          <li className="relative ul_li">
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
          <li className="relative ul_li">
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
  );
};

export default Header;
