import React from "react";

export function Listadojugadores() {

    const listado = JSON.parse(localStorage.getItem('array'));

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Posición</th>
                    <th scope="col">Camisa</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {listado.map(l => 
                    <>
                        <tr>
                            <td>{l.nombre}</td>
                            <td>{l.posicion}</td>
                            <td>{l.camisa}</td>
                        </tr>
                    </>
                    )
                        
                    };

                </tbody>
                </table>
        </>
    );
};