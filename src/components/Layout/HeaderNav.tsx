import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header >
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">lOGO</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="link link-accent"><NavLink to="/inicio">Inicio</NavLink></li>
            <li className="link link-accent"><NavLink to="/contacto">Contacto</NavLink></li>
            <li>
              <details>
                <summary className="link link-accent">
                  Catalogo
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li className="link link-accent"><NavLink to="/remeras">Remeras</NavLink></li>
                  <li className="link link-accent"><NavLink to="/pantalon">Pantalon</NavLink></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>



  )
}
