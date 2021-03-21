import React,{useState,useEffect} from "react"
import instance from "./axios"
import request from "./requests"
import "./index.css"

export default function Banner({changeSrc})
{
    const [movie,setMovie] = useState([]);
    useEffect(()=>{
        async function fetchMovie()
        {
            const req= await instance.get(request.fetchNetflixOriginals);
            setMovie(
                req.data.results[Math.floor(Math.random()*req.data.results.length-1)]
                )
        }
        fetchMovie();
    },[])
    return(
        <header className="banner" style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
            backgroundSize:"cover"
            }}>
        <div className="banner_contents">
            <h1 className="banner_title">{movie?.title||movie?.name||movie?.original_name  /*. or ?. both are similar in use*/ }</h1>
            <div className="banner_buttons">
                <button className="banner_button" onClick={()=>changeSrc(Math.floor(Math.random()*8))}><a href="#ifram">Play</a></button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_desc">{movie.overview}</h1>
        </div>
        </header>
    )
}