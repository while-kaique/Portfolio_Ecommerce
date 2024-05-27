

const Header = () => {
  return (
    <header className="bg-gray-400 w-full h-1/5 fle flex-wrap">
      <div className="w-full h-3/4">Informações do Jorge</div>
      <nav>
        <ul className="w-full flex justify-center gap-14 uppercase font-bold text-sm font-['Mulish'] relative">
          <li className="relative ul_li "><h1 className="pb-2 hover:cursor-pointer">Mais Desejados</h1>
            <ul className="submenu_maisDesejados">
              <li><a href="#">opção 1</a></li>
              <li><a href="#">opção 2</a></li>
              <li><a href="#">opção 3</a></li>
              <li><a href="#">opção 4</a></li>
            </ul>
          </li>
          <li className="relative ul_li"><h1 className="pb-2 hover:cursor-pointer">bebês</h1>
            <ul className="submenu_maisDesejados">
              <li><a href="#">opção 1</a></li>
              <li><a href="#">opção 2</a></li>
              <li><a href="#">opção 3</a></li>
              <li><a href="#">opção 4</a></li>
            </ul></li>
          <li className="relative ul_li"><h1 className="pb-2 hover:cursor-pointer">menina</h1>
            <ul className="submenu_maisDesejados">
              <li><a href="#">opção 1</a></li>
              <li><a href="#">opção 2</a></li>
              <li><a href="#">opção 3</a></li>
              <li><a href="#">opção 4</a></li>
            </ul></li>
          <li className="relative ul_li"><h1 className="pb-2 hover:cursor-pointer">menino</h1>
            <ul className="submenu_maisDesejados">
              <li><a href="#">opção 1</a></li>
              <li><a href="#">opção 2</a></li>
              <li><a href="#">opção 3</a></li>
              <li><a href="#">opção 4</a></li>
            </ul></li>
          <li className="relative ul_li"><h1 className="pb-2 hover:cursor-pointer">pijamas</h1>
            <ul className="submenu_maisDesejados">
              <li><a href="#">opção 1</a></li>
              <li><a href="#">opção 2</a></li>
              <li><a href="#">opção 3</a></li>
              <li><a href="#">opção 4</a></li>
            </ul></li>
          <li className="relative ul_li"><h1 className="pb-2 hover:cursor-pointer">bazar</h1>
            <ul className="submenu_maisDesejados">
              <li><a href="#">opção 1</a></li>
              <li><a href="#">opção 2</a></li>
              <li><a href="#">opção 3</a></li>
              <li><a href="#">opção 4</a></li>
            </ul></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header