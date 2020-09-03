import React from 'react'
import './PeliculasAzul.sass'
import {peliculasReact, peliculasCrear, peliculasEditar, peliculasGeneral, peliculasTarjeta} from '../../assets/imagenes'

const PeliculasAzul=() => {
    return (
        <>
            <article>
                <h1>Proyecto Películas</h1>
                <img src={peliculasReact} alt="Imagen proyecto" />
                <p className="descripcion">
                    Este proyecto es una aplicacion que muestra una serie de películas de una base de datos externa, es solo un proyecto
                    Front hecho en REACT y estilizado con SASS, la conexíon con la base de datos se hace a través de AXIOS, se hace los
                    requerimientos para hacer un CRUD, se compone por Class y Functions components, tambien se hizo Deploy con firebase
                    de Google, 
                </p>
                <h2>Vistas</h2>
                <div className="vistas-container">
                    <div className="vistas">
                        <img src={peliculasGeneral} alt="Tarjetas generales"/>
                        <p>Tarjetas generales</p>
                    </div>
                    <div className="vistas">
                        <img src={peliculasCrear} alt="Tarjeta de creacion"/>
                        <p>Tarjeta de creacion</p>
                    </div>
                    <div className="vistas">
                        <img src={peliculasEditar} alt="Tarjeta de edicíon"/>
                        <p>Tarjeta de edicíon</p>
                    </div>
                    <div className="vistas">
                        <img src={peliculasTarjeta} alt="Tarjeta individual"/>
                        <p>Tarjeta individual</p>
                    </div>
                </div>
                <a href="https://peliculasreact.web.app/" target="_blank" rel="noopener noreferrer">
                    IR AL PROYECTO
                </a>
                
            </article>
        </>
    )
}
export default PeliculasAzul;