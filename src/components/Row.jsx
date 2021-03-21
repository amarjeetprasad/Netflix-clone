import React,{useState,useEffect} from "react"
import instance from "./axios"
import "./index.css"

const base_url="https://image.tmdb.org/t/p/original/"
export default function Row({title,fetchURL,isLarger,changeSrc})
{
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        async function fetchData()
        {
            const req = await instance.get(fetchURL);
            setMovies(req.data.results);
        }
        fetchData();
    }, [fetchURL])
    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row-posters">
                {
                    movies.map((movie,i)=>{
                      return  <img className={`${isLarger?"row-poster":"small-row-poster"}`} 
                      key={movie.id} src={`${base_url}${isLarger?movie.poster_path:movie.backdrop_path}`} 
                      alt={movie.title} onClick={()=>{return title==="NETFLIX ORIGINALS"?changeSrc(i+1):null}}/>
                    })
                }
            </div>
        </div>
    )
}