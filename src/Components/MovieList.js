import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

export default function MovieList() {

  return (
    <div className='movieList_component'>
      <MovieCard posterUrl="" title="Breaking bad" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quam enim mollitia voluptates nesciunt rerum earum eum, obcaecati hic iure quisquam id iste amet corrupti perspiciatis placeat accusamus? Quos, ea!" rating=""/>
      <MovieCard posterUrl="" title="" description="" rating=""/>
      <MovieCard posterUrl="" title="" description="" rating=""/>
      <MovieCard posterUrl="" title="" description="" rating=""/>
    </div>
  )
}
