import React from "react";

export default function Footer(){
    return(
        <footer className="footer fixed-bottom container ">
            <a href="https://github.com/JulioCesarDelAngel" target="_blank" rel="noreferrer">
                <i className="bi bi-github" style={{fontSize:"3rem",color: "white"}}></i>
            </a>

            <a href="https://www.linkedin.com/in/JuliusMathison" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin" style={{fontSize:"3rem",color: "white"}}></i>
            </a>

            <a href="https://stackoverflow.com/users/19882522" target="_blank" rel="noreferrer">
                <i className="bi bi-stack-overflow" style={{fontSize:"3rem",color: "white"}}></i>
            </a>
        </footer>
    );
}