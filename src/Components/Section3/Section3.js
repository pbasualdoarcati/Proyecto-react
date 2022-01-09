import React from 'react'

const Section3 = () => {
    return (
/*Background degree, cuadrado en el centro con imagen y rectangulo buttom right con carrusel*/
        <article class="section3 container-fluid" id="products">
            <div class="section3__casa">
                <div class="section3__recuardoNaranja">
                    <div id="segundo_carousel" class="carousel slide section3_carousel" data-bs-ride="carousel">
                        <div class="carousel-inner section3_carousel_texto">
                            <div class="carousel-item active">
                                <p class="segundo_carousel_texto1">Sed ut perspiciatis.</p>
                                <h3 class="segundo_carousel_titulo">Nemo Enim</h3>
                                <p class="segundo_carousel_texto2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            </div>
                            <div class="carousel-item">
                                <p class="segundo_carousel_texto1">Sed ut perspiciatis.</p>
                                <h3 class="segundo_carousel_titulo">Nemo Enim</h3>
                                <p class="segundo_carousel_texto2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            </div>
                            <div class="carousel-item">
                                <p class="segundo_carousel_texto1">Sed ut perspiciatis.</p>
                                <h3 class="segundo_carousel_titulo">Nemo Enim</h3>
                                <p class="segundo_carousel_texto2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            </div>
                        </div>
                        <div class="section3_botones">
                            <button class="carousel-control-prev section3_botones1" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
                            <button class="carousel-control-next section3_botones2" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    
    )
}

export default Section3
