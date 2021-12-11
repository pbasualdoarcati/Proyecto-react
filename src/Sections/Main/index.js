import React from 'react'

function Main(props){
    return (
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
                            <button type="button" className="readmore">Readmore</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="texto1">
                            <h1 className="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                            <p className="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque.
                            </p>
                                <button type="button" className="readmore">Readmore</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="texto1">
                            <h1 className="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                            <p className="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque. Lor</p>
                            <button type="button" className="readmore">Readmore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
