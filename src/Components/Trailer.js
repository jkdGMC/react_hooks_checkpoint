import React from 'react'
import './Trailer.css'

export default function Trailer({trailerLink,title,description,navigate}) {

  return (
    <div className="trailer_container">
      <div className='title_movie'>Trailer of {title}</div>
      <div className="trailer_video">
        <iframe width="853" height="480" src={trailerLink} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="desc_container">
        <h4>{description}</h4>
      </div>
      <buttton className='back-button' onClick={() =>navigate('/')}> Back to home</buttton>
    </div>
  )
}