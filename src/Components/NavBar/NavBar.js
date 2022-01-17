import React from 'react';

function NavBar (props){
    return(
        <div className="container-fluid contenedor__menu">
            <header className='container-fluid header-container'>

                <nav className="navbar navbar-expand-lg navbar-light bg-transparent nav__menu" >

                    <div className="container top_logo">
                        <img src="./images/top-logo.png" alt="Logo top 25 Watts " className="d-inline-block align-text-top"></img>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse nav__menu--link" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item nav__menu--item">
                                <a href="#home" className="nav-link" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item nav__menu--item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item nav__menu--item">
                                <a href="#products" className="nav-link">Products</a>
                            </li>
                            <li className="nav-item nav__menu--item">
                                <a href="#corredor" className="nav-link">Services</a>
                            </li>
                            <li className="nav-item nav__menu--item">
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