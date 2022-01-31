import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

const Formulario = () => {
     const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

     return (
          <>
               <Formik
                    initialValues={{
                         name: '',
                         email: '',
                         phone: '',
                         message: ''
                    }}
                    validate={(valores) => {
                         let errores = {};
                         // Validamos el nombre
                         if (!valores.name) {
                              errores.name = 'Please enter your name'
                         } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                              errores.name = 'Your name can only contain letters and spaces'
                         }
                         // Validamos el email
                         if (!valores.email) {
                              errores.email = 'Please enter your email'
                         } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                              errores.email = 'Your email can only contain letters, numbers, hyphens, periods and spaces'
                         }
                         // Validamos el phone
                         if (!valores.phone) {
                              errores.phone = 'Please enter your phone'
                         }
                         // Validamos el mensaje
                         if (!valores.message) {
                              errores.message = 'Please enter your massege'
                         }

                         return errores;
                    }}
                    
                    onSubmit={(valores, {resetForm}) => {
                         resetForm();
                         cambiarFormularioEnviado(false);
                         setTimeout(() => {
                              cambiarFormularioEnviado(true);
                         }, 2000)
                         axios.post('https://proyecto-25watts.herokuapp.com/api/saveUsers', valores)
                         
                    }}
               >
                    {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                         <form onSubmit={handleSubmit} id="formulario" className="formulario_globo__content__form">
                              <div className="formulario_globo__content__form__name">
                                   <label htmlFor="name">Name</label>
                                   <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="formulario_globo__content__input"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                   />
                                   {touched.name && errors.name && <div className='error'>{errors.name}</div>}

                              </div>
                              <div className="formulario_globo__content__form__email">
                                   <label htmlFor="email">Email</label>
                                   <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="formulario_globo__content__input"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                   />
                                   {touched.email && errors.email && <div className='error'>{errors.email}</div>}

                              </div>
                              <div className="formulario_globo__content__form__phone">
                                   <label htmlFor="phone">Phone</label>
                                   <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        className="formulario_globo__content__input"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                   />
                                   {touched.phone && errors.phone && <div className='error'>{errors.phone}</div>}
                              </div>
                              <div className="formulario_globo__content__form__message">
                                   <label htmlFor="message">Message</label>
                                   <textarea
                                        className="formulario_globo__content__textarea"
                                        name="message"
                                        id="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required>    
                                   </textarea>
                                   {touched.message && errors.message && <div className='error'>{errors.message}</div>}
                              </div>
                              <div className="formulario_globo__content__boton">
                                   <button type="submit" className="button_send"> SEND </button>
                                   {formularioEnviado && <div className='exito_div'><p className='exito'>Form sent successfully</p></div>}
                              </div>
                         </form>
                    )}

               </Formik>

          </>
     )
}

export default Formulario
