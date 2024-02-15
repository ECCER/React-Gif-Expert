// En orden por convencion, react
// import { useEffect, useState } from "react";
// Importaciones de terceros

// Nuestras importaciones y codigos (Componentes y luego hekpers o hooks personalizados)
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs"


export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs( category );

  console.log({ images, isLoading });


  return (
    <>
        <h3>{ category }</h3>

        { isLoading && ( <h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          { 
            images.map( ( image ) =>  (
              // <li key={id}> {title} </li>
              <GifItem 
                key={ image.id } 
                { ...image }
              />
            ) ) 
          }
        </div>

        {/* <h5>{ counter }</h5>
        <button onClick={ () => setCounter(counter + 1) }>+1</button> */}
    </>
  )
}
