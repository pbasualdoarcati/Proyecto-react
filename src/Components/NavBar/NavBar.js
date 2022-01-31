
import React, { useState } from 'react';

function NavBar (props){

    const [click, setClick] = useState('');

    // let menuHamburger = false;

    const showHamburger = () =>{
      
      
      if(click === '' ) {
        setClick('is-active')
        console.log('click: ', click)
       }
      else {
        setClick('')
        console.log('click: ', click)
      }

      // d.querySelector(panel).classList.toggle("is-active");
      // d.querySelector(panelButton).classList.toggle("is-active");
    
    }

    return(
        <div className="container-fluid contenedor__menu ">
            <header className='container-fluid header-container'>

                <aside className={`nav__menuHamburger  ${click}`}>
                        <button className="nav__menuHamburger--close" type="button" onClick={ () => showHamburger () }>
                            X
                        </button>
                        <ul className="nav__menuHamburgerNav">
                            <li className="nav__menuHamburger--item">
                                <a href="#home" className="nav-link" aria-current="page" onClick={ () => showHamburger () }>Home</a>
                            </li>
                            <li className="nav__menuHamburger--item">
                                <a href="#about" className="nav-link" onClick={ () => showHamburger () }>About</a>
                            </li>
                            <li className="nav__menuHamburger--item">
                                <a href="#products" className="nav-link" onClick={ () => showHamburger () }>Products</a>
                            </li>
                            <li className="nav__menuHamburger--item">
                                <a href="#corredor" className="nav-link" onClick={ () => showHamburger () }>Services</a>
                            </li>
                            <li className="nav__menuHamburger--item">
                                <a href="#contact" className="nav-link" onClick={ () => showHamburger () }>Contact</a>
                            </li>
                        </ul>
                </aside>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent nav__menu" >

                    <div className="container top_logo">
                        <img src="./images/top-logo.png" alt="Logo top 25 Watts " className="d-inline-block align-text-top"></img>
                    </div>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" */}
                    <button className="navbar-toggler" type="button" onClick={ () => showHamburger () }>
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