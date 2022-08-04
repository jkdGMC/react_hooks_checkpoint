import './App.css';
import Form from './Components/Form';
import MovieList from './Components/MovieList';
import Filter from "./Components/Filter";
import { useState, useEffect } from 'react';

function App() {
  let movies = [
    {
      posterUrl : '/breakingBad.jpg',
      title : 'Breaking Bad',
      description : 'Un professeur de chimie de lycée chez qui on a diagnostiqué un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l\'avenir de sa famille.',
      rating : 9.5
    },
    {
      posterUrl : '/breakingBad.jpg',
      title : 'Breaking Bad',
      description : 'Un professeur de chimie de lycée chez qui on a diagnostiqué un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l\'avenir de sa famille.',
      rating : 9.5
    },
    {
      posterUrl : '/breakingBad.jpg',
      title : 'Breaking Bad',
      description : 'Un professeur de chimie de lycée chez qui on a diagnostiqué un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l\'avenir de sa famille.',
      rating : 9.5
    }
  ]
  let movie = {
    posterUrl : '',
    title : '',
    description : '',
    rating : 0
  }

  const [tabMovies, setMovies] = useState(movies)
  const [newMovie, setNewMovie] = useState(movie)

  const addMovie = (e) =>{
    e.preventDefault()
    tabMovies.push(newMovie)
    setMovies(tabMovies)
    setNewMovie(movie)
    console.log(tabMovies);
  }

  return (
    <div className="App">
      <div className='title_movieList'>
        <h1>Liste des films</h1>
      </div>  
      <div className='movies'>
        <MovieList tabMovies = {tabMovies} /> 
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
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;