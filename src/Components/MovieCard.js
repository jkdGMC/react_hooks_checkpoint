import React from 'react'
import './MovieCard.css'

export default function MovieCard(props) {
  return (
    <div className='movieCard_component'>
      <img src={props.posterUrl} alt="imgPoster" />
      <div className='title_movie'>{props.title}</div>
      <div className='description_movie'><p>{props.description}</p></div>
      <div className='rating_movie'>{props.rating}</div>
      <div className="btn-more"><button>Voir plus</button></div>
    </div>
  )
}
