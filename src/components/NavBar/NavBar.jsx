import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#">Jinetes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ulNavBar">
                            <li class="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Categorías</a>
                            </li> */}
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Almohadones</a></li>
                                    <li><a className="dropdown-item" href="#">Velas</a></li>
                                    <li><a className="dropdown-item" href="#">Cuadros</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre nosotros</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget></CartWidget>
                </div>
            </nav>
        </div>
    )
}

export default NavBar