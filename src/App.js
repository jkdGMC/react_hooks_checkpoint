import './App.css';
import Form from './Components/Form';
import MovieList from './Components/MovieList';
import Filter from "./Components/Filter";
import { useState, useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Trailer from './Components/Trailer';

function App() {

  let movies = [
    {
      posterUrl : '/breakingBad.jpg',
      title : 'Breaking Bad',
      description : 'Un professeur de chimie de lycée chez qui on a diagnostiqué un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l\'avenir de sa famille.',
      rating : 9.5,
      trailerLink: ''
    },
    {
      posterUrl : '/see.jpg',
      title : 'See',
      description : 'Dans un futur lointain, alors que la race humaine a perdu le sens de la vue, la société a dû trouver d\'autres façons d\'intéragir, de chasser, de construire et tout simplement de survivre. Cet équilibre est bousculé le jour où des jumeaux naissent avec la capacité de voir. Baba Voss, le patriarche, doit alors protéger son clan contre une reine puissante qui veut les détruire, persuadée qu\'il s\'agit de sorcellerie.',
      rating : 10,
      trailerLink: ''

    },
    {
      posterUrl : '/alteredCarbon.jpg',
      title : 'Altered Carbon',
      description : 'Muni d\'un nouveau corps, Takeshi Kovacs revient sur Harlan pour une mission, mais la planète est à feu et à sang, et son grand amour perdu erre dans l\'ombre.',
      rating : 6.5,
      trailerLink: ''

    }
  ]

  let movie = {
    posterUrl : '',
    title : '',
    description : '',
    rating : 0
  }

  let selectValue = '';

  const [tabMovies, setMovies] = useState(movies)
  const [newMovie, setNewMovie] = useState(movie)
  const [choice, setChoice] = useState(selectValue)

  console.log(typeof choice)

  const addMovie = (e) =>{
    e.preventDefault()
    tabMovies.push(newMovie)
    setMovies(tabMovies)
    setNewMovie(movie)
  }

  const linkToTrailer = () => {
    <Navigate to='/trailer' />
  }

  const sortMovies = (e) => {
    e.preventDefault()
    if (choice === 'title'){
      tabMovies.sort((a,b) => {
        let titleA = a.title.toLowerCase()
        let titleB = b.title.toLowerCase()

        if(titleA < titleB)
          return -1
        else if(titleA > titleB)
          return 1
        else
          return 0 
      })  
      setChoice(selectValue)
    }

    else{
      tabMovies.sort((a,b) => a.rating - b.rating)
      setChoice(selectValue)
    }
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
          <Filter 
            sortMovies={(e) => sortMovies(e)}
            setChoice={setChoice}
          />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<App />}></Route>  
        <Route path="/trailer" element={<Trailer />}></Route>
      </Routes>
    </div>
  );
}

export default App;