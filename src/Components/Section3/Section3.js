import React from 'react'

const Section3 = () => {
    return (
/*Background degree, cuadrado en el centro con imagen y rectangulo buttom right con carrusel*/
        <article className="section3 container-fluid" id="products">
            <div className="section3__casa">
                <div className="section3__recuardoNaranja">
                    <div id="segundo_carousel" className="carousel slide section3_carousel" data-bs-ride="carousel">
                        <div className="carousel-inner section3_carousel_texto">
                            <div className="carousel-item active">
                                <p className="segundo_carousel_texto1">Sed ut perspiciatis.</p>
                                <h3 className="segundo_carousel_titulo">Nemo Enim</h3>
                                <p className="segundo_carousel_texto2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            </div>
                            <div className="carousel-item">
                                <p className="segundo_carousel_texto1">Sed ut perspiciatis.</p>
                                <h3 className="segundo_carousel_titulo">Nemo Enim</h3>
                                <p className="segundo_carousel_texto2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            </div>
                            <div className="carousel-item">
                                <p className="segundo_carousel_texto1">Sed ut perspiciatis.</p>
                                <h3 className="segundo_carousel_titulo">Nemo Enim</h3>
                                <p className="segundo_carousel_texto2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="section3_botones">
                            <button className="carousel-control-prev section3_botones1" type="button" data-bs-target="#segundo_carousel"
<<<<<<< HEAD
                                data-bs-slide="prev"><img src='../images/button/left.svg'></img>
                            </button>
                            <button className="carousel-control-next section3_botones2" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="next"><img src='../images/button/right.svg'></img>
=======
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next section3_botones2" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
>>>>>>> feature/seccion1
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    
    )
}

export default Section3
