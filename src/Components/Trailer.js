import React from 'react'
import './Trailer.css'
import { Link, useParams } from 'react-router-dom'

export default function Trailer({tabMovies}) {
  let trailerParams = useParams()

  let clickedMovie = tabMovies.filter(movie => movie.title === trailerParams.title)
  console.log(clickedMovie);

  return (
    <div className="trailer_container">
      <div className='title_movie'><h1>Trailer of {clickedMovie[0].title}</h1></div>
      <div className="trailer_video">
        <iframe width="853" height="480" src={clickedMovie[0].trailerLink} title={clickedMovie[0].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="desc_container">
        <p>{clickedMovie[0].description}</p>
      </div>
      <Link to="/"><button className='back-button'> Back to home</button></Link>
    </div>
  )
}
