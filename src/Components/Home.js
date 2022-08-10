import React from 'react'
import Filter from './Filter'
import Form from './Form'
import MovieList from './MovieList'

const Home = ({tabMovies, newMovie, setNewMovie, addMovie, sortMovies, setChoice}) => {
  return (
    <div className='App'>
            <div className='title_movieList'>
        <h1>Liste des films</h1>
      </div>  
      <div className='movies'>
        <MovieList
          tabMovies = {tabMovies}
        /> 
      </div>
      <div className="add_filter_container">
        <div className="form">
          <h1>Add a new movie</h1>
          <Form 
            newMovie={newMovie}
            setNewMovie={setNewMovie}
            onSubmit = {(e) => addMovie(e)}
          />
        </div>
        <div className="filter">
          <h1>Filter movies</h1>
          <Filter 
            sortMovies={(e) => sortMovies(e)}
            setChoice={setChoice}
          />
        </div>

      </div>

    </div>
  )
}

export default Home