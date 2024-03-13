import React, { useEffect, useState } from 'react';
import { Global } from '../helpers/Global';

interface Articulo {
  _id: string;
  titulo: string;
  contenido?: string; // Ajusta según la estructura real de tus datos
  precio: number;
}

export const Pantalon: React.FC = () => {
  const [pantalon, setPantalon] = useState<Articulo[]>([]);


  useEffect(() => {
    conseguirArticulos();
  }, []);


  const conseguirArticulos = async () => {
    try {

      const url = Global.url + "pantalones";

      const peticion = await fetch(url, {

        method: "GET"

      });

      // parte importante para que salte error si hay algun problema 
      if (!peticion.ok) throw new Error(peticion.statusText)

      const datos = await peticion.json()
      setPantalon(datos)
      console.log("Datos del servidor:", datos);

    } catch (error: unknown) {
      console.error("Error al obtener artículos:", error);
    }
  };




  return (
    <div>
      <h1>pantalon</h1>
      {pantalon.length >= 1 ? (

        pantalon.map(pantalon => (

          <div className="card w-96 bg-base-100 shadow-xl inline-block m-6" key={pantalon._id}>
            <figure><img src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{pantalon.titulo}</h2>
              <p>{pantalon.precio}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>



        ))
      ) : (
        <h1>No hay artículos disponibles</h1>
      )}
    </div>
  );
};

export default Pantalon;