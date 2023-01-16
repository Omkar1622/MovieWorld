import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

// e8bcd7a5
const API_URL = 'https://www.omdbapi.com?apikey=e8bcd7a5';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data);
    setMovies(data.Search);
  }

  useEffect(() => {

    searchMovies('spiderman');

  }, []);

  return (
    
    <div className='app'>
        <h1>MovieWorld</h1>

        {/* Search bar */}
        <div className='search'>
          <input
             placeholder='Search for Movies'
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             
           />

           <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm) }
             />
        </div>

        {/* Cards Container */}
        <div className='container'>

        

        </div>


      {
        movies?.length > 0
          ? (
            <div className='container'>

              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ) )}

            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }


    </div>
   

  );
}

export default App;
