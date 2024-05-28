

const Header = () => {
  return (
    <header className="bg-white w-full h-1/5 shadow-navbar z-10">
      <div className="w-full h-3/4">Informações do Jorge</div>
      <nav className="h-1/4 flex items-end">
        <ul className="w-3/5 mx-auto flex justify-center uppercase font-semibold text-sm font-['Mulish'] relative">
          <li className="relative ul_li"><h1 className="hover:cursor-pointer">Mais Desejados</h1>
            <div className="submenu_maisDesejados">
              <ul>
                <h1><a href="#">opção 1</a></h1>
                <li><a href="#">Lorem ipsum dolor sit.</a></li>
                <li><a href="#">Lorem, ipsum.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
              </ul>
            </div>
          </li>
          <li className="relative ul_li"><h1 className="hover:cursor-pointer">bebês</h1>
            <div className="submenu_maisDesejados">
              <div className="double_ul">
                <ul>
                  <h1><a href="#">opção 1</a></h1>
                  <li><a href="#">Lorem ipsum dolor sit.</a></li>
                  <li><a href="#">Lorem, ipsum.</a></li>
                  <li><a href="#">Lorem, ipsum dolor.</a></li>
                  <li><a href="#">Lorem.</a></li>
                </ul>
                <ul>
                  <h1><a href="#">opção 1</a></h1>
                  <li><a href="#">Lorem ipsum dolor sit.</a></li>
                  <li><a href="#">Lorem, ipsum.</a></li>
                  <li><a href="#">Lorem, ipsum dolor.</a></li>
                  <li><a href="#">Lorem.</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="relative ul_li"><h1 className="hover:cursor-pointer">menina</h1>
            <div className="submenu_maisDesejados">
              <ul>
                <h1><a href="#">opção 1</a></h1>
                <li><a href="#">Lorem ipsum dolor sit.</a></li>
                <li><a href="#">Lorem, ipsum.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
              </ul>
            </div>
          </li>
          <li className="relative ul_li"><h1 className="hover:cursor-pointer">menino</h1>
            <div className="submenu_maisDesejados">
              <ul>
                <h1><a href="#">opção 1</a></h1>
                <li><a href="#">Lorem ipsum dolor sit.</a></li>
                <li><a href="#">Lorem, ipsum.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
              </ul>
            </div>
          </li>
          <li className="relative ul_li"><h1 className="hover:cursor-pointer">pijamas</h1>
            <div className="submenu_maisDesejados">
              <ul>
                <h1><a href="#">opção 1</a></h1>
                <li><a href="#">Lorem ipsum dolor sit.</a></li>
                <li><a href="#">Lorem, ipsum.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
              </ul>
            </div>
          </li>
          <li className="relative ul_li"><h1 className="hover:cursor-pointer">bazar</h1>
            <div className="submenu_maisDesejados">
              <ul>
                <h1><a href="#">opção 1</a></h1>
                <li><a href="#">Lorem ipsum dolor sit.</a></li>
                <li><a href="#">Lorem, ipsum.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Lorem.</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header