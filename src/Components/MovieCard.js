import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard({posterUrl,title,description,rating}) {

  return (
    <div className='movieCard_component'>
        <Link to={`/trailer/${title}`}><img src={posterUrl} alt="imgPoster" width='200' height='250' /></Link>
        <div className='title_movie'><h5>{title}</h5></div>
        <div className='description_movie'><p>{description}</p></div>
        <div className='rating_movie'>Rating : {rating}</div>
    </div>
  )
}
