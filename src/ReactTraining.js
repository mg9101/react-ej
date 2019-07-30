import React from 'react'

export default class ReactTraining extends React.Component {


    render() {
        return React.createElement("div",
            {className: "react-training"},
            React.createElement("h1", null,
                "Objetivos del curso."),
            React.createElement("ul", null,
                React.createElement("li", null, "Configurar React..."),
                React.createElement("li", null, "Revisar los fundamentos"),
                React.createElement("li", null, "Construir una aplicacion de ejemplo")));
        // return(
        //     <div className='react-training'>
        //         <h1>I'm a happy trainee</h1>
        //         <ul>
        //             <li>Configurar React.</li>
        //             <li>Revisar los fundamentos.</li>
        //             <li>Construir una aplicación de ejemplo.</li>
        //         </ul>
        //     </div>
        // );
    }
}