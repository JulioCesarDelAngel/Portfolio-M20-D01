import React, { Fragment } from "react";
import profileImage from '../../assets/images/myAvatar_bw.png'

export default function Bio () {
    return (
        <Fragment>
            <p className="blockquote mt-3">Acerca de mi</p>
            <img src={profileImage} className="rounded-circle" style={{with:"100px",height:"100px"}}  
            borderRadius="50%" alt="Profile Img"></img>
                <figure class="text-center">
                <blockquote className="blockquote mt-3">
                    <p className="text-start">Soy un ingeniero de software, apasionado por la tecnología y la mejora continua.
                        Empleado en una de las grandes consultorías de Software en San Pedro Garza García, México.                         
                        </p>
                        <p className="text-start">He articipado en diferentes proyectos de diversas industrias en todos los roles del ciclo de desarrollo de software.</p>
                        <p className="text-start">Como FreeLancer realizó consultoría de desarrollo de software a la medida, análisis, diseño, implementación y mantenimiento.</p>
                        <p className="text-start">¿Tienes una idea?</p>
                        <p className="text-start">¡¡Hagámosla!!</p>                        
                </blockquote>
                </figure>

        </Fragment>
    );
}