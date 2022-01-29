import React from 'react'

const Section5 = () => {
    return (
        <div>
            <div className="formulario_globo">
                <div className="formulario_globo__form" id="contact">
                    <div className="formulario_globo__content">
                        <h4 className="formulario_globo__content__h4">Get in touch <span className='formulario_globo__content_text_orange'>We are hiring!</span></h4>
                        <div id="formulario" className="formulario_globo__content__form">
                            <form className="formulario_globo__content__form__contact" action="contacto.php" method="POST">
                                <div className="formulario_globo__content__form__name">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className="formulario_globo__content__input" required/>
                                </div>
                                <div className="formulario_globo__content__form__email">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="formulario_globo__content__input" required/>
                                </div>
                                <div className="formulario_globo__content__form__phone">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" name="phone" id="phone" className="formulario_globo__content__input" required/>
                                </div>
                                <div className="formulario_globo__content__form__message">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="formulario_globo__content__textarea" id="message"></textarea>
                                </div>
                                <div className="formulario_globo__content__boton">
                                    <button type="button" className="button_send">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="formulario_globo__imagen-contacto">
                        <img src="./images/contact.png" alt="contacto"/>
                    </div>
                </div>
            </div>
            <footer>
                <div className="pie-pagina">
                    <p className="pie-pagina__p5"><sup>2020 © All rights reserved</sup></p>
                    <div className="footer_logo">
                        <img className="pie-pagina__footer-logo" src="./images/footer-logo.png" alt="Logo 25 WATTS"/>
                    </div>
                </div>
            </footer>
        </div>




        
    )
}

export default Section5
