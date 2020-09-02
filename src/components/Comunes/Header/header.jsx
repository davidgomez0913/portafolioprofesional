import React from 'react'
import {Link} from 'react-router-dom'
import './Header.sass'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-descripcion">
                    <h1>David Gómez</h1>
                    <p>Ingeniero Mecatrónico y Desarrollador WEB</p>
                </div>
                <div className="header-menu">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Inicio</Link>
                            </li>
                            <li>
                                <a href="#proyectos">Proyectos</a>
                            </li>
                            <li>
                                <a href="#redes">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header