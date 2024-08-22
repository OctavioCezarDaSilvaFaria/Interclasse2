import React from 'react';
import "./style.css";
import Flag from "react-world-flags";

export function Grupos({ flag, flagCss, sala, V, D, E, SG, PTS }) {
    return (
        <div id="grupos">
            <div id="tagName">
                <div id="sombra1">
                    <div id="band2">
                        <div id="band1">
                            <Flag code={flag} id={flagCss} />
                        </div>
                        <p>{sala}</p>
                    </div>
                    <div id="bola">
                        <div id="pontos">
                            <p>{V}</p>
                        </div>
                    </div>
                    <div id="bola">
                        <div id="pontos">
                            <p>{D}</p>
                        </div>
                    </div>
                    <div id="bola">
                        <div id="pontos">
                            <p>{E}</p>
                        </div>
                    </div>
                    <div id="bola">
                        <div id="pontos">
                            <p>{SG}</p>
                        </div>
                    </div>
                    <div id="bola">
                        <div id="pontos">
                            <p>{PTS}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grupos;