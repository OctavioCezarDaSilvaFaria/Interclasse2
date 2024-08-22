import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

export function Filet (){
    return (
        <div id="filet">
      <div>
        <Link to="/Futsal" className="link1">Futsal</Link>
        </div>
        <div>
        <Link to="/Voleibol" className="link1">Voleibol</Link>
        </div>
        <div>
        <Link to="/Handebol" className="link1">Handebol</Link>
        </div>
        <div>
        <Link to="/Queimada" className="link1">Queimada</Link>
        </div>
        <div>
        <Link to="/Basquete" className="link1">Basquete</Link>
        </div>
        <div>
        <Link to="/Futmesa" className="link1">Futmesa</Link>
        </div>
        <div>
        <Link to="/TennisDeMesa" className="link1">Tênis de Mesa</Link>
        </div>
        <div>
        <Link to="/Atletismo" className="link1">Atletismo</Link>
        </div>
      </div>
    )
}

export default Filet;