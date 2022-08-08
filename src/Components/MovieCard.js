import React from 'react'
import './MovieCard.css'

export default function MovieCard({posterUrl,title,description,rating,linkToTrailer}) {

  return (
    <div className='movieCard_component display-delay'>
      <img src={posterUrl} alt="imgPoster" width='200' height='250' />
      <div className='title_movie'><h5>{title}</h5></div>
      <div className='description_movie'><p>{description}</p></div>
      <div className='rating_movie'>Rating : {rating}</div>
      <div className='btn-trailer'><button className='btn' onClick={linkToTrailer}></button></div>
    </div>
  )
}
