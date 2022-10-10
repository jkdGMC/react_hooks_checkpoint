import './App.css';
import { useState } from 'react';
import { Outlet, useLocation, Route, Routes } from 'react-router-dom';
import Trailer from './Components/Trailer';
import Home from './Components/Home';

function App() {

  let movies = [
    {
      posterUrl : '/breakingBad.jpg',
      title : 'Breaking Bad',
      description : 'Un professeur de chimie de lycée chez qui on a diagnostiqué un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l\'avenir de sa famille.',
      rating : 9.5,
      trailerLink: 'https://www.youtube.com/embed/HhesaQXLuRY'
    },
    {
      posterUrl : '/see.jpg',
      title : 'See',
      description : 'Dans un futur lointain, alors que la race humaine a perdu le sens de la vue, la société a dû trouver d\'autres façons d\'intéragir, de chasser, de construire et tout simplement de survivre. Cet équilibre est bousculé le jour où des jumeaux naissent avec la capacité de voir. Baba Voss, le patriarche, doit alors protéger son clan contre une reine puissante qui veut les détruire, persuadée qu\'il s\'agit de sorcellerie.',
      rating : 10,
      trailerLink: 'https://www.youtube.com/embed/7Rg0y7NT1gU'

    },
    {
      posterUrl : '/alteredCarbon.jpg',
      title : 'Altered Carbon',
      description : 'Muni d\'un nouveau corps, Takeshi Kovacs revient sur Harlan pour une mission, mais la planète est à feu et à sang, et son grand amour perdu erre dans l\'ombre.',
      rating : 6.5,
      trailerLink: 'https://www.youtube.com/embed/R_hzj4vlpX4'
    }
  ]

  let movie = {
    posterUrl : '',
    title : '',
    description : '',
    rating : 0,
    trailerLink : ''
  }

  let selectValue = '';

  const [tabMovies, setMovies] = useState(movies)
  const [newMovie, setNewMovie] = useState(movie)
  const [choice, setChoice] = useState(selectValue)

  const addMovie = (e) =>{
    e.preventDefault()
    tabMovies.push(newMovie)
    setMovies(tabMovies)
    setNewMovie(movie)
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

  const location = useLocation()
  
    if (location.pathname.includes('trailer')){
      return (
        <>
        <Outlet />
        <Routes>
          <Route path='/trailer' element={<Trailer tabMovies={tabMovies}/>} >
            <Route path=':title' element={<Trailer tabMovies={tabMovies}/>} />
          </Route>
        </Routes>
        </>
        )
      }
      return(
        <>
        <Outlet/>
        <Routes>
          <Route path='/' element={<Home tabMovies={tabMovies} newMovie={newMovie} setNewMovie={setNewMovie} addMovie={addMovie} sortMovies={sortMovies} setChoice={setChoice} />} />
        </Routes>
        </>  
    )
}

export default App;