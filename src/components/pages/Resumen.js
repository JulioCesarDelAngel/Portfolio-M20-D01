import React, { Fragment }  from "react";

export default function Resumen () {
    return (
        <Fragment>
            <h3 className="text-center">Resumen</h3>

            <figure>
            <blockquote className="blockquote">
            
                <a className="ms-2 me-2" href="https://github.com/JulioCesarDelAngel/Portfolio-M20-D01/raw/main/src/assets/files/cvjcdab.pdf" target="_blank" rel="noreferrer">
                    <i className="bi bi-file-person align-middle" style={{fontSize:"3rem",color: "white"}}></i>
                    Resumen
                </a>
                
                <h5 className="blockquote mt-3">Competencias Font-end:</h5>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Diseño responsivo</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <h5 className="blockquote mt-3">Competencias Back-end:</h5>
                <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MONGO DB</li>
                <li>Graphql</li>
                <li>Apollo Server</li>
                </ul>
            </blockquote>
            </figure>

    </Fragment>

    );
}