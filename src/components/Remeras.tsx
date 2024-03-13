import React, { useEffect, useState } from 'react';
import { Global } from '../helpers/Global';

interface Articulo {
  _id: string;
  titulo: string;
  contenido?: string; // Ajusta según la estructura real de tus datos
  precio: number;
}

export const Remeras: React.FC = () => {
  const [remeras, setRemeras] = useState<Articulo[]>([]);


  useEffect(() => {
    conseguirArticulos();
  }, []);


  const conseguirArticulos = async () => {
    try {

      const url = Global.url + "remeras";

      const peticion = await fetch(url, {

        method: "GET"

      });

      // parte importante para que salte error si hay algun problema 
      if (!peticion.ok) throw new Error(peticion.statusText)

      const datos = await peticion.json()
      setRemeras(datos)
      console.log("Datos del servidor:", datos);

    } catch (error: unknown) {
      console.error("Error al obtener artículos:", error);
    }
  };


  return (
    <div>
      <h1>remeras</h1>
      {remeras.length >= 1 ? (

        remeras.map(remeras => (

          <div className="card w-96 bg-base-100 shadow-xl inline-block m-6" key={remeras._id}>
            <figure><img src="https://textilliso.com.ar/wp-content/uploads/2023/04/STAR-WARS-30.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{remeras.titulo}</h2>
              <p>{remeras.precio}</p>
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

export default Remeras;
