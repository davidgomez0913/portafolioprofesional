import React from 'react'
import {Link} from 'react-router-dom'
import {peliculasReact} from '../../assets/imagenes'
import './Proyectos.sass'

const Proyecto = () => {
    const listado = [
        {
            nombre: "Peliculas con React",
            descripcion: "Es un proyecto Frontend realizado totalmente con React. ",
            imagen: peliculasReact,
            direccion: "peliculasazul"
        },
        {
            nombre: "Peliculas con React",
            descripcion: "adfadf",
            imagen: peliculasReact,
            direccion: "peliculasazul"
        }
    ]
    return (
        <>
            <div className="proyectos-container" id="proyectos">
                {   
                    listado.map((element) => {
                        return (
                            <>
                                <Link to={`/proyectos/${element.direccion}`} className="proyecto-individual">
                                    <img src={element.imagen} alt="Miniatura proyecto"/>
                                    <div className="textos">
                                        <h2> {element.nombre} </h2>
                                        <p> {element.descripcion} </p>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Proyecto
