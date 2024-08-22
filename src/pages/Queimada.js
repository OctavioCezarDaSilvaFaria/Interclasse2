import React from "react";
import "../Queimada.css";
import Banner from "../assets/Group 12.png";
import Flag from "react-world-flags";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filet from "../components/Filet";
import Grupos from "../components/Grupos";
import MataMata from "../components/MataMata";
import masculino from "../assets/Group 16.png"
import feminino from "../assets/Group 17.png"

function Queimada() {
  return (
    <div id="queimada">
      <Header/>
      <Filet />
      <div id="cont">
      <img src={Banner} id="ban"/>
      </div>
      <div id="caixa_texto">
        <div id="texto">
          <p>
          Queimada é um jogo de agilidade e estratégia, onde duas equipes tentam eliminar os adversários acertando-os com uma bola. 
          Os jogadores devem esquivar-se, correr e lançar a bola com precisão para evitar serem "queimados". 
          O jogo é emocionante e divertido, combinando ação rápida com táticas inteligentes.
          </p>
          <h2>Equipes em Campo</h2>
          <p>
          Conheça as equipes que disputarão o título de campeã do futsal no Interclasse 2024. 
          Cada equipe traz sua estratégia, jogadores talentosos e a vontade de levantar o troféu. 
          Confira abaixo as equipes e seus elencos:
          </p>
        </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="DEU" id="bnd"/>
        </div>
        <p>ALEMANHA - 2ºB</p>
      </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="AGO" id="bnd"/>
        </div>
        <p>ANGOLA - 3ºA</p>
      </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="ITA" id="bnd"/>
        </div>
        <p>ITÁLIA - 1ºA</p>
      </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="BEL" id="bnd1"/>
        </div>
        <p>BÉLGICA - 9ºB</p>
      </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="BRA" id="bnd3"/>
        </div>
        <p>BRASIL - 9ºA</p>
      </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="CAN" id="bnd2"/>
        </div>
        <p>CANADÁ - 1ºB</p>
      </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="GBR" id="bnd2"/>
        </div>
        <p>INGLATERRA - 2ºA</p>
      </div>
      <div id="nomes">
      <div id="bandu">
          <Flag code="CZE" id="bnd"/>
        </div>
        <p>RPA. TCHECA - 3ºB</p>
      </div>
      <div id="grupos">
        <div id="escritas">
        <h2>Fase de Grupos</h2>
         <p>
          Acompanhe a Disputa: Veja a tabela de Classificações da Fase de Grupos e Mata-Mata:
         </p>
        </div>
      </div>
      
      <img src={masculino} className="todos"/>
      <div id="container">
       <div id="grupo1">
        <div id="subTitle">
          <div id="gp2">
         <div id="gp1">
          <h2>GRUPO 1</h2>
         </div>
          <h2>V</h2>
          <h2>D</h2>
          <h2>E</h2>
          <h2>SG</h2>
          <h2>PTS</h2>
        </div>
        </div>
          <Grupos 
          flag="BRA"
          flagCss="bnd3"
          sala="BRASIL - 9ºA"
          />
          <Grupos 
          flag="CAN"
          flagCss="bnd2"
          sala="CANADÁ - 1ºB"
          />
          <Grupos 
          flag="GBR"
          flagCss="bnd2"
          sala="INGLATERRA - 2ºA"
          />
          <Grupos 
          flag="CZE"
          flagCss="bnd3"
          sala="REP. TCHECA - 3ºB"
          />
       </div>
      </div>
      <div id="container">
       <div id="grupo1">
        <div id="subTitle">
          <div id="gp2">
         <div id="gp1">
          <h2>GRUPO 2</h2>
         </div>
          <h2>V</h2>
          <h2>D</h2>
          <h2>E</h2>
          <h2>SG</h2>
          <h2>PTS</h2>
        </div>
        </div>
          <Grupos 
          flag="DEU"
          flagCss="bnd3"
          sala="ALEMANHA - 2ºB"
          />
          <Grupos 
          flag="AGO"
          flagCss="bnd"
          sala="ANGOLA - 3ºA"
          />
          <Grupos 
          flag="ITA"
          flagCss="bnd"
          sala="ITÁLIA - 1ºA"
          />
          <Grupos 
          flag="BEL"
          flagCss="bnd1"
          sala="BÉLGICA - 9ºB"
          />
       </div>
      </div>

      <img src={feminino} className="todos2"/>
      <div id="container">
        
       <div id="grupo1">
        <div id="subTitle">
          <div id="gp2">
         <div id="gp1">
          <h2>GRUPO 1</h2>
         </div>
          <h2>V</h2>
          <h2>D</h2>
          <h2>E</h2>
          <h2>SG</h2>
          <h2>PTS</h2>
        </div>
        </div>
          <Grupos 
          flag="BRA"
          flagCss="bnd3"
          sala="BRASIL - 9ºA"
          />
          <Grupos 
          flag="CAN"
          flagCss="bnd2"
          sala="CANADÁ - 1ºB"
          />
          <Grupos 
          flag="GBR"
          flagCss="bnd2"
          sala="INGLATERRA - 2ºA"
          />
          <Grupos 
          flag="CZE"
          flagCss="bnd3"
          sala="REP. TCHECA - 3ºB"
          />
       </div>
      </div>
      <div id="container">
       <div id="grupo1">
        <div id="subTitle">
          <div id="gp2">
         <div id="gp1">
          <h2>GRUPO 2</h2>
         </div>
          <h2>V</h2>
          <h2>D</h2>
          <h2>E</h2>
          <h2>SG</h2>
          <h2>PTS</h2>
        </div>
        </div>
          <Grupos 
          flag="DEU"
          flagCss="bnd3"
          sala="ALEMANHA - 2ºB"
          />
          <Grupos 
          flag="AGO"
          flagCss="bnd"
          sala="ANGOLA - 3ºA"
          />
          <Grupos 
          flag="ITA"
          flagCss="bnd"
          sala="ITÁLIA - 1ºA"
          />
          <Grupos 
          flag="BEL"
          flagCss="bnd1"
          sala="BÉLGICA - 9ºB"
          />
       </div>
      </div>
      <div id="m-m">
        <h2 id="h2">MATA - MATA</h2>
         <p>
         Sistema eliminatório ou mata-mata é todo sistema em que cada time que seja competidor disputa um certo número de partidas 
         entre si, até que um deles seja promovido à próxima fase do torneio, a final. 
         Em geral , o perdedor de cada disputa é definitivamente eliminado do torneio.
         </p>
        </div>
      <br/>
    </div>
    <MataMata 
    genero="Masculino"
    />
    <br/>
    <MataMata 
    genero="Feminino"
    />
      <Footer/>
    </div>
  );
}

export default Queimada;
