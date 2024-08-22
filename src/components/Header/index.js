import React from 'react';
import "./style.css";
import Logo from "../../assets/Logosb 1.png";
import { Link } from "react-router-dom";

export function Header (){
    return (
        <header>
        <div id="navGrid">
         <div id="nav">
          <h5><Link to="/" className='diferenciado'>INTERCLASSE</Link></h5>
         </div>
          <div id="palitin">
           <h1>|</h1>
          </div>
          <div>
           <Link to="/sobreNos" className="link">Sobre Nós</Link>
          </div>
        </div>
         <img src={Logo} id="logo"/>
      </header>
    )
}

export default Header;