import React, {useState, useEffect} from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifts ({params}){
  const {keyword} = params
  const [loading, setLoading] = useState(false)
    const [gifs, setGifs] =  useState([])

    useEffect(function (){
      setLoading(true)
        getGifs({keyword})
        .then(gifs => {
          setGifs(gifs)
        setLoading(false)
      }
        )}, [keyword])

        if (loading) return <i src="https://previews.123rf.com/images/boxerx/boxerx1611/boxerx161100006/68882648-descargar-signo-en-fondo-blanco-cargar-icono-barra-de-carga-de-datos-ilustraci%C3%B3n-de-stock-vector.jpg">Cargando</i>

      return <div> { gifs.map(singleGif => 
          <Gif
          key={singleGif.title}
          title={singleGif.title} 
          url={singleGif.url} 
          id={singleGif.id}
          />

        )
      }
      </div>
}