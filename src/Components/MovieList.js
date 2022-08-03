import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

export default function MovieList() {

  return (
    <div className='movieList_component'>
      <MovieCard posterUrl="" title="" description="" rating=""/>
      <MovieCard posterUrl="" title="" description="" rating=""/>
      <MovieCard posterUrl="" title="" description="" rating=""/>
      <MovieCard posterUrl="" title="" description="" rating=""/>
    </div>
  )
}
