import React, { Fragment }  from "react";

export default function Resumen () {
    return (
        <Fragment>
            <p className="blockquote mt-3">Resumen</p>
            <figure>
            <blockquote className="blockquote">
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
                <li>MONGO DB, Graphql</li>
                </ul>
            </blockquote>
            </figure>

    </Fragment>

    );
}