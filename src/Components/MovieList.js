import React, { useEffect } from 'react'
import useForceUpdate from 'use-force-update'
import MovieCard from './MovieCard'
import './MovieList.css'


export default function MovieList({tabMovies}) {

  return (
    <div className='movieList_component'>      
      {
        tabMovies.map((movie,key) => (
          <MovieCard 
            key={key}
            posterUrl={movie.posterUrl}
            title={movie.title}
            description={movie.description}
            rating={movie.rating}
          />
        ))
      }
    </div>
  )
}
