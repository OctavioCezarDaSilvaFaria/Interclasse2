import React from "react";
import "../Home.css";
import Banner from "../assets/Group 1.png";
import Sobre from "../assets/Group 4.png";
import Jogo from "../assets/Group 5.png";
import Datas from "../assets/Group 18.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filet from "../components/Filet";

function Home() {
  return (
    <div id="home">
      <body>
        <Header/>
        <Filet />
       <div id="cont">
        <img src={Banner} id="ban"/>
       </div>
        <div id="preto">
        </div>
         <img src={Sobre} id="sob"/>
         <div id="eventoGrid">
          <div id="evento">
           <div id="information">
            <p>
            Os jogos interclasses é um evento organizado e promovido no âmbito escolar entre as turmas e séries. 
            </p>
            <p>
            O objetivo dos Jogos Interclasse é promover a integração das turmas de um mesmo ano escolar, 
            confraternizando através dos esportes, jogos, brincadeiras e dança.
            </p>
           </div>
            <img src={Jogo} id="jogo"/>
          </div>
          </div>
          <div>
          <img src={Datas} id="datas"/>
          </div>
      <Footer/>
      </body>
    </div>
  );
}

export default Home;


