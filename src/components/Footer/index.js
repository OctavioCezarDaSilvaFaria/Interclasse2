import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export function Footer (){
    return (
        <footer>
        <div className="fotter">
          <div id="term">
            <Link to="" className="linkzin">Política de Privacidade</Link>
            <Link to="" className="linkzin">Termos de uso</Link>
          </div>
          <div id="icones">
          <FaFacebookF className="icon" size="25"/>
          <RiTwitterXFill className="icon" size="25"/>
          <FaYoutube className="icon" size="25"/>
          <FaInstagram className="icon" size="25"/>
          </div>
        </div>
        <p id="cop">
        Copyright 2024 © Todos os direitos reservados. - E72
        </p>
      </footer>
    )
}

export default Footer;