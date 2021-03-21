import React, { useState } from "react"
import requests from "./components/requests"
import Nav from "./components/Nav"
import Row from "./components/Row"
import Banner from "./components/banner"
import videos from "./components/video"
import "./index.css"


export default function App()
{
    const [src,setSrc] = useState("");
    const [videoStyle,setVideoStyle]= useState({display:"none"});

    function changeSrc(id)
    {
      if(id<=videos.length)
      {
        const Src=videos.filter(e=>e.id===id)[0].src;
        setSrc(Src);
        setVideoStyle({display:"block"})
      }
      else
      {
          setSrc("");
          setVideoStyle({display:"none"})
      }
    }

    return (
        <div className="App">
            <Nav/>
            <Banner changeSrc={changeSrc}/>
            <Row isLarger="true" title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} changeSrc={changeSrc}/>
            <div className="playing-video">
            <iframe width="100%" height="550" id="ifram"
                src={src} style={videoStyle} title="video from youtube" >
            </iframe>
            </div>
            <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentries}/>
        </div>
    )
}