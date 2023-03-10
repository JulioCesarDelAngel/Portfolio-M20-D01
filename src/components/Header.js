import React, { Fragment } from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import Bio from './pages/Bio'
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
import Resumen from "./pages/Resumen";

export default function Header(){

    const [currentPage, setCurrentPage] = useState('Bio');
    
    const renderPage = () => {
        if (currentPage === 'Bio') {
          return <Bio />;
        }
        if (currentPage === 'Portafolio') {
          return <Portafolio />;
        }
        if (currentPage === 'Contacto') {
          return <Contacto />;
        }
        return <Resumen />;
      };

      const handlePageChange = (page) => setCurrentPage(page);

    return (
      <Fragment>
        <header className="header">
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
        <body className="container">
          <div>{renderPage()}</div>
        </body>        
      </Fragment>
    );
}