import React from 'react'
import './homepage'
import {github} from '../../assets/imagenes'
import './Homepage.sass'

const Homepage = () => {

    return (
        <>
            <main className="container">
                <div className="presentacion">
                    <img src={github} alt="Foto personal"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime eum ut impedit! Ea rem repudiandae excepturi officia numquam autem maiores quos ipsam quo dolores, expedita adipisci esse ab omnis?</p>
                </div>
                <div className="habilidades">
                    <h2>Habilidades</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>API Rest</li>
                        <li>React</li>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>Sass</li>
                        <li>Uso de MVC</li>
                        <li>SQL</li>
                        <li>Manipulación de datos Formato JSON</li>
                    </ul>
                </div>
            </main>
        </>
    )
}


export default Homepage