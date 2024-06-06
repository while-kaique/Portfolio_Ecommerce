import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { SiPagseguro } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="" >
      <footer className="flex justify-center items-start gap-48 // w-full h-72  // mt-16 // bg-index-blue // text-sm text-white">
        <div className="flex flex-col justify-start mt-10 ">
          <h1 className="text-lg font-bold mb-4">Institucional</h1>
          <ul className="flex flex-col gap-2">
            <a href="#">
              <li>Quem Somos</li>
            </a>
            <a href="#">
              <li>Privacidade e dados pessoais</li>
            </a>
            <a href="#">
              <li>Central de Atendimento</li>
            </a>
            <a href="#">
              <li>Troca e devolução</li>
            </a>
            <a href="#">
              <li>Tempo de entrega</li>
            </a>
            <a href="#">
              <li>Política de pagamento</li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col justify-start mt-10 ">
          <h1 className="text-lg font-bold mb-4">Institucional</h1>
          <ul className="flex flex-col gap-2">
            <a href="#" className="flex items-center h-5">
              <FaWhatsapp className="text-xl // mr-1"/>
              <li>(99)999999999</li>
            </a>
            <a href="#">
              <li>9999 999 9999</li>
            </a>
            <a href="#">
              <li>sac@suaempresa.com</li>
            </a>
            <h1>De segunda-feira a sexta-feira:</h1>
            <h1 className="font-bold">8h às 12h e 13h às 17:30</h1>
          </ul>
        </div>
        <div className="flex flex-col justify-start mt-10 ">
          <h1 className="text-lg font-bold mb-2">Acompanhe</h1>
          <ul className="flex flex-col gap-2">
            <div className="social_links flex // flex-wrap //">
              <a href="#" className="w-1/3 text-lg">
                <FaYoutube />
              </a>
              <a href="#" className="w-1/3 text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="w-1/3 text-lg">
                <FaSquareFacebook />
              </a>
            </div> 
          </ul>
        </div>
        <div className="flex flex-col justify-start mt-10 ">
        <h1 className="text-lg font-bold mb-4 text-center">Compre Seguro</h1>
        <ul className="flex flex-wrap justify-center items-center">
          <FaCcVisa className="w-1/2 text-4xl mb-4"/>
          <SiAmericanexpress className="w-1/2 text-4xl mb-4" />
          <FaCcMastercard className="w-1/2 text-4xl" />
          <SiPagseguro className="w-1/2 text-4xl" />
        </ul>
      </div>
      </footer>

      <div className="sub_footer // flex flex-wrap justify-center items-start gap-x-20 // w-full // bg-index-blue // text-sm text-white">
        <FaReact className="text-[70px]"/>
        <FaJava className="text-[70px]"/>
        <h1 className="w-full text-center mt-10 p-2 bg-cyan-600">Desenvolvido por uma equipe talentosa e dedicada! Gostou do trabalho? <a href="" className="hover:underlin hover:font-bold">Envie uma mensagem via whatsapp!</a></h1>
      </div>
    </div>
  )
}

export default Footer