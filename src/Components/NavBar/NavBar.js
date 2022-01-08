import React from 'react';

function NavBar (props){
    return(
        <div className="contenedor-menu">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent nav_menu" >
                    <div className="container-fluid top_logo">
                        <img src="images/top-logo.png" alt="Logo top 25 Watts " className="d-inline-block align-text-top"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav_menu_link" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item fuente_menu">
                                <a href="#home" className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item fuente_menu">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item fuente_menu">
                                <a href="#products" className="nav-link">Products</a>
                            </li>
                            <li className="nav-item fuente_menu">
                                <a href="#corredor" className="nav-link">Services</a>
                            </li>
                            <li className="nav-item fuente_menu">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default NavBar;