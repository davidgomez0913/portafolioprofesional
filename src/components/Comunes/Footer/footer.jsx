import React from 'react'
//import { Link } from 'react-router-dom'
import { github, linkedin, whatsapp } from '../../../assets/imagenes'
import './Footer.sass'

const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer-container">
                    <div id="derechos">
                        <p>Todos los derechos reservados</p>
                        <p>Proyecto hecho en React</p>
                    </div>
                    <div id="redes">
                        <p>Redes: </p>
                        <ul>
                            <li>
                                <a href="https://github.com/davidgomez0913" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Logo GitHub" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/davgomezr/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="Logo LinkedIn" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.link/7tbtcg" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsapp} alt="Logo WhatsApp"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="contacto">
                        <ul>
                            <li>
                                <p>Correo: </p>
                                <a href="mailto:dafergo95@gmail.com">dafergo95@gmail.com</a>
                            </li>
                            <li>
                                <p>Celular: </p>
                                <a id="telefono" href="tel:+57301-696-7861">(+57) 301-696-7861</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer