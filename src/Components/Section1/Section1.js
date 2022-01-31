import React from 'react'
import NavBar from '../NavBar/NavBar'
import Button from '../Elements/Button'

function Section1(props){
    return (
        <div className='principal container-fluid'>
        <NavBar />
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active texto1">
                    <img src="./images/bicicleta.png" className="d-none d-md-block w-100" alt="Casilla rodante con Bicicleta y montañas" />
                    <img src="./images/bicicleta-mobile.png" className="d-block w-100 d-md-none" alt="Casilla rodante con Bicicleta y montañas" />
                    
                    <div className="carousel-caption">
                        <h5 className='titulo_carousel'>Sed ut perspiciatis unde omnis iste natus</h5>
                        <p className='texto_carousel d-none d-md-block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                        <div className='carousel__button'>
                            <Button symbol={'Read More'} />
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <img src="./images/bicicleta.png" className="d-none d-md-block w-100" alt="Casilla rodante con Bicicleta y montañas" />
                    <img src="./images/bicicleta-mobile.png" className="d-block w-100 d-md-none" alt="Casilla rodante con Bicicleta y montañas" />
                    
                    <div className="carousel-caption">
                        <h5 className='titulo_carousel'>Sed ut perspiciatis unde omnis iste natus</h5>
                        <p className='texto_carousel d-none d-md-block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                        <div className='carousel__button'>
                            <Button symbol={'Read More'} />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./images/bicicleta.png" className="d-none d-md-block w-100" alt="Casilla rodante con Bicicleta y montañas" />
                    <img src="./images/bicicleta-mobile.png" className="d-block w-100 d-md-none" alt="Casilla rodante con Bicicleta y montañas" />
                    
                    <div className="carousel-caption ">
                        <h5 className='titulo_carousel'>Sed ut perspiciatis unde omnis iste natus</h5>
                        <p className='texto_carousel d-none d-md-block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                        <div className='carousel__button'>
                            <Button symbol={'Read More'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="seccion1 seccion1__container container-fluid container_carousel" id="home" >
            <div className="container_carousel container-fluid" id="home">
                <div id="primer_carousel" className="carousel slide container_internal" data-bs-ride="carousel">
                    <div className="carousel-indicators botones_carousel">
                        <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="0" className="active carousel_boton"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="1" aria-label="Slide 2"
                            className="carousel_boton"></button>
                        <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="2" aria-label="Slide 3"
                            className="carousel_boton"></button>
                    </div>
                    <div className="carousel-inner container_internal_primero container-fluid">
                        <div className="carousel-item active">
                            <div className="texto1">
                                <h1 className="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                                <p className="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque.</p>
                                    <Button symbol={'Read More'} />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="texto1">
                                <h1 className="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                                <p className="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque.</p>
                                <Button symbol={'Read More'} />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="texto1">
                                <h1 className="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                                <p className="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque. Lor</p>
                                <Button symbol={'Read More'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    )
}

export default Section1;
