import React from 'react'

const Section4 = () => {
    return (
        <article className="section4_acordion_container" id="corredor">
                <div className="section4_acordion">
                    <div className="accordion accordion-flush section4_acordion_texto" id="accordionCorredor">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </button>
                            </h4>
                            <div id="flush-collapseOne" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit
                                    aperiam, consectetur quos exercitationem totam ipsam illum fugit quibusdam culpa quidem rerum
                                    tempore vero molestiae omnis maiores quo? Sed, ea!
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </button>
                            </h4>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea
                                    quaerat tempora ratione veniam, vero odio illo assumenda, quia molestias. Nobis soluta nesciunt
                                    quis odit quidem similique sunt vitae.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </button>
                            </h4>
                            <div id="flush-collapseThree" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error
                                    incidunt a facilis animi, ratione tempore atque beatae officia quos doloremque unde dignissimos,
                                    distinctio maxime, voluptas excepturi similique eaque est.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </article>
    )
}

export default Section4
