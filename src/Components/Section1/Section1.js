import React from 'react'
import NavBar from '../NavBar/NavBar'
import Button from '../Elements/Button'

function Section1(props){
    return (
        <div className="seccion1 seccion1__container container-fluid container_carousel" id="home" >
            <NavBar />
            <div className="container-fluid container__carousel" id="home">
                <div id="primer_carousel" className="carousel slide container_internal" data-bs-ride="carousel">
                    
                   
                    
                    <div className="carousel-inner container_internal_primero">
                        
                        <div className="carousel-item active">
                            <img src="./images/bicicleta.png" class="d-block w-100" alt="Bicicleta" />
                            <div class="carousel-caption d-none d-md-block carousel__bloque">
                                <h5 className='titulo__carousel'>Sed ut perspiciatis unde ominis iste natus</h5>
                                <p className='texto__carousel'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque..</p>
                                <Button symbol={'Read More 1'} />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="./images/bicicleta.png" class="d-block w-100" alt="Bicicleta" />
                            <div class="carousel-caption d-none d-md-block carousel__bloque">
                                <h5 className='titulo__carousel'>Sed ut perspiciatis unde ominis iste natus</h5>
                                <p className='texto__carousel'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque..</p>
                                <Button symbol={'Read More 2'} />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/bicicleta.png" class="d-block w-100" alt="Bicicleta" />
                            <div class="carousel-caption d-none d-md-block carousel__bloque">
                                <h5 className='titulo__carousel'>Sed ut perspiciatis unde ominis iste natus</h5>
                                <p className='texto__carousel'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque..</p>
                                <Button symbol={'Read More 3'} />
                            </div>
                        </div>

                        <div className="carousel-indicators botones_carousel">
                            <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="0" className="active carousel_boton"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="1" aria-label="Slide 2"
                                className="carousel_boton"></button>
                            <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="2" aria-label="Slide 3"
                                className="carousel_boton"></button>
                        </div>

                    </div>

                    
                    
                </div>
            </div>
        </div>
    )
}

export default Section1;
