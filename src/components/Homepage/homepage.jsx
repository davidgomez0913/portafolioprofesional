import React from 'react'
import './homepage'
import {peliculasReact, github} from '../../assets/imagenes'
import {Link} from 'react-router-dom'
import './Homepage.sass'

const Homepage = () => {
    return (
        <>
            <main className="container">
                <div className="presentacion">
                    <img src={github} alt="Foto personal"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime eum ut impedit! Ea rem repudiandae excepturi officia numquam autem maiores quos ipsam quo dolores, expedita adipisci esse ab omnis?</p>
                </div>
                <div className="proyectos-container" id="proyectos">
                    <div className="proyecto">
                        <img src={peliculasReact} alt="Proyecto Peliculas"/>
                        <Link to="/peliculasazul">Peliculas React</Link>
                    </div>
                    <div className="proyecto">
                        <img src={peliculasReact} alt="Proyecto Peliculas"/>
                        <Link to="/peliculasazul">Peliculas React</Link>
                    </div>
                    <div className="proyecto">
                        <img src={peliculasReact} alt="Proyecto Peliculas"/>
                        <Link to="/peliculasazul">Peliculas React</Link>
                    </div>
                    <div className="proyecto">
                        <img src={peliculasReact} alt="Proyecto Peliculas"/>
                        <Link to="/peliculasazul">Peliculas React</Link>
                    </div>
                    <div className="proyecto">
                        <img src={peliculasReact} alt="Proyecto Peliculas"/>
                        <Link to="/peliculasazul">Peliculas React</Link>
                    </div>
                    <div className="proyecto">
                        <img src={peliculasReact} alt="Proyecto Peliculas"/>
                        <Link to="/peliculasazul">Peliculas React</Link>
                    </div>
                    <div className="proyecto">
                        <img src={peliculasReact} alt="Proyecto Peliculas"/>
                        <Link to="/peliculasazul">Peliculas React</Link>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Homepage