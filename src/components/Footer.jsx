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
    <div className="">
      <div className="ft bg-index-blue">
        <footer className="block justify-center items-center gap-48 // sm:flex sm:justify-between sm:items-center  // w-10/12 mx-auto h-full  // mt-16 // bg-index-blue // text-sm text-white">
          <div className="flex flex-col justify-start mt-10 ml-5 //   sm:ml-9  ">
            <h1 className="text-lg font-bold mb-4 mt-5">Institucional</h1>
            <ul className="flex flex-col gap-1">
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
          <div className="flex flex-col justify-start  mt-10 ml-5 // sm:ml-0">
            <h1 className="text-lg font-bold mb-4">Institucional</h1>
            <ul className="flex flex-col gap-2">
              <a href="#" className="flex items-center h-5">
                <FaWhatsapp className="text-xl // mr-1" />
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
          <div className="flex flex-col justify-start mt-10 ml-5 // sm:ml-0">
            <h1 className="text-lg font-bold mb-2 ">Acompanhe</h1>
            <ul className="flex flex-col gap-2">
              <div className="social_links flex">
                <a href="#" className="w-10 text-3xl sm:w-1/3">
                  <FaYoutube />
                </a>
                <a href="#" className="w-10 text-3xl sm:w-1/3">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 text-3xl sm:w-1/3">
                  <FaSquareFacebook />
                </a>
              </div>
            </ul>
          </div>
          <div className="flex flex-col justify-start mt-10 ml-5 // sm:ml-0">
            <h1 className="text-lg font-bold mb-4 text-start // sm:text-start">Compre Seguro</h1>
            <ul className="flex gap-4 // sm:flex-wrap sm:justify-center sm:items-center">
              <FaCcVisa className="w-10 text-4xl" />
              <SiAmericanexpress className="w-10 text-4xl" />
              <FaCcMastercard className="w-10 text-4xl" />
              <SiPagseguro className="w-10 text-4xl" />
            </ul>
          </div>
        </footer>
      </div>

      <div className="sub_footer // flex flex-wrap justify-start items-start //sm:justify-center sm:items-center// gap-x-20 // w-full // bg-index-blue // text-sm text-white // sm:justify-center ">
        <FaReact className="text-[70px]" />
        <FaJava className="text-[70px]" />
        <h1 className="w-full text-center mt-10 p-2 bg-cyan-600">
          Desenvolvido por uma equipe talentosa e dedicada! Gostou do trabalho?{" "}
          <a href="" className="hover:underlin hover:font-bold">
            Envie uma mensagem via whatsapp!
          </a>
        </h1>
      </div>

      <div className="lll  flex flex-col items-start m-auto w-full mt-1 ml-2 sm:w-11/12">

        <div className="certificados flex mt-2">
          <a href="#" className="cert m-2">
            <img src="/images/selo1.png" alt="Selo 1" className="w-14 sm:w-16" />
          </a>
          <a href="#" className="cert m-2">
            <img src="/images/selo2.png" alt="Selo 2" className="w-14 sm:w-16" />
          </a>
        </div>
        <hr className="hh mt-10"></hr> 
        <h5 className="text-footer flex justify-center items-center text-xs min-w-80 h-14 mr-2 mb-5 //  text-gray-400 
        sm:mb-5">
          Embora raro, os preços poderão variar durante a navegação sem aviso
          prévio. Pode ocorrer divergência entre o preço exibido no detalhe do
          produto e preço apresentado na sacola de compras, por questões
          sistêmicas. Em caso de divergência de preços no site, o valor válido é
          o da finalização da compra. Copyright © 2012 - 2019. Todos os
          direitos reservados KYLY. CNPJ: 78.855.830/0001-98 Rodovia SC 418 KM
          3, Centro/SC CEP: 89107- 000.
        </h5>
        
      </div>
    </div>
  );
};

export default Footer;