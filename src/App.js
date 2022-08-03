import './App.css';
import MovieList from './Components/MovieList';

function App() {

  return (
    <div className="App">
      <div className='title_movieList'>
        <h1>Liste des films</h1>
      </div>  
      <div className='movies'>
        <MovieList />
      </div>
      <div className='btns'>
        <button className='btn'>Add new movie</button>
        <button className='btn'>Filter movie</button>
      </div>
    </div>
  );
}

export default App;
