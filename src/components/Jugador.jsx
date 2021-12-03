import React, { useRef, useState } from "react";
import  {Link}  from "react-router-dom";

export function Jugador() {
    // useRef let's store the data from the forms into variables
    const nombre = useRef()
    const posicion = useRef()
    const camisa = useRef()

    // This is an alert that tells you when data has been saved
    const [alerta, setAlerta] = useState(false);

    let array = []
    // This function let's us use the Guardar button to save the data input by the user
    function guardar(){
        const nom = nombre.current.value;
        const pos = posicion.current.value;
        const cam = camisa.current.value;
        console.log(nom,pos,cam);

        
        const j = {
            nombre:nom,
            posicion: pos,
            camisa: cam
        };
        // The || is for when it's run the first time, so it doesn't throw an error.
        array = JSON.parse(localStorage.getItem('array'))|| [];

        array.push(j);

        console.log(array);

        // Save j in local storage
        localStorage.setItem('array',JSON.stringify(array));
        nombre.current.value = '';
        posicion.current.value = '';
        camisa.current.value = '';
        // After the data is saved into the localStorage, the alert is true
        setAlerta(true);
        // After 3 s, the alert is then set to false
        setTimeout(() => setAlerta(false),3000);
    };

    // The && is a ternary operator that acts when the condition is true

    return (
        <>
            {alerta && 
                <div className="alert alert-info" role="alert">
                    Los datos de {nombre.current.value} han sido guardados!
                </div>
            }
            
            <form>
                <label htmlFor=''>Nombre</label>
                <input type='text' className='form-control' placeholder='Nombre' ref={nombre}></input>
                <label htmlFor=''>Posición</label>
                <input type='text' className='form-control' placeholder='Posición' ref={posicion}></input>
                <label htmlFor=''>Camisa</label>
                <input type='text' className='form-control' placeholder='camisa' ref={camisa }></input>
                <Link to='/listado'>
                    <div className='col-auto'>
                        <button type='button' className='btn btn-primary mb-3'>Listar</button>
                    </div>
                </Link>
                
                <div className='col-auto'>
                    <button type='button' className='btn btn-primary mb-3' onClick={guardar}>Guardar</button>
                </div>
            </form>
        </>
    );
};