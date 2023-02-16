import React from "react";
export default function Navigation({currentPage, handlePageChange}){
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#x">Julio Cesar Del Angel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className={currentPage === "Bio" ? "nav-link active" : "nav-link"}  href="#Bio"
            onClick={()=> handlePageChange('Bio')}>Bio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#x">Portafolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#x">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#x">Resumen</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}