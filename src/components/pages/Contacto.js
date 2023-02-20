import React from "react";

export default function Contacto () {
    return (
        <div className="container text-center align-middle">

            <legend>Contacto</legend>
            <a className="ms-2 me-2" href="mailto:sysa.mail@gmail.com" target="_blank" rel="noreferrer">
                <i className="bi bi-envelope align-middle" style={{fontSize:"3rem",color: "white"}}></i>
                sysa.mail@gmail.com
            </a>
            <a className="ms-2 me-2" href="tel:+528112556606" target="_blank" rel="noreferrer">
                <i className="bi bi-phone align-middle" style={{fontSize:"3rem",color: "white"}}></i>
                +528112556606
            </a>
        </div>
        
    );
}