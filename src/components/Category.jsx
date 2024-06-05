import { MdOutlineExpandMore } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";
import { useState } from "react";
import PropTypes from 'prop-types';

const Category = ({category}) => {

    const lowerTitle = (category.title).toLowerCase()
    const upperTitle = (category.title).toUpperCase()
    
  const [close, setClose] = useState(true)
  function handleIcon(){
    setClose(!close)
  }
  
  return (
    <>
        <li className={`${upperTitle} min-h-12 `}>
            <input className="inp" type="checkbox" name={lowerTitle} id={lowerTitle}> 
            </input>
                
            <label htmlFor={lowerTitle} className="h-12 block // border-[1px] border-[rgba(172, 172, 172, 0.486)] // hover:cursor-pointer" onClick={handleIcon}>
                <div className="label // flex justify-between items-center // w-4/5 h-full // m-auto">
                <h1 className="w-2/3 font-bold text-gray-800">{category.title}</h1>
                {close ? <MdOutlineExpandMore/> : <IoRemoveOutline/>}
                </div>
            </label>

                <ul className="content bg-white text-gray-400 font-light">
                    {category.categs.map((categ, key)=>{
                        return (
                            <li className="optionFilter px-8 h-12 m-auto" key={key}>
                                <div className="options flex justify-between items-center h-full">
                                <a className="w-2/3" href={`/infantil/${lowerTitle}/calcas-e-leggings`}><span>{categ}</span></a>
                                <div className="void"></div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </li>
    </>
  )
}

Category.propTypes = {  
    category: PropTypes.object,
};

export default Category