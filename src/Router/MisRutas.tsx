import React from 'react'
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Catalogo } from '../components/Catalogo'
import { Contacto } from '../components/Contacto'
import { HeaderNav } from '../components/Layout/HeaderNav'
import { Footer } from '../components/Layout/Footer'
import { Remeras } from '../components/Remeras'
import Pantalon from '../components/Pantalon'


export const MisRutas = () => {
    return (
        <BrowserRouter >




            {/* Header y navegacion */}
            <HeaderNav />


            {/* contenido central */}





            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/catalogo' element={<Catalogo />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/remeras' element={<Remeras />} />
                <Route path='/pantalon' element={<Pantalon />} />
                <Route path='*' element={(
                    <>
                        <h1>Error 404</h1>
                        <strong>esta pagina no existe </strong>
                    </>
                )} />

            </Routes>


            {/* Footer*/}
            <Footer />


        </BrowserRouter>
    )
}
