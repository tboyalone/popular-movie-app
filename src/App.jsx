import React, { useState } from 'react'
import Moviecard from './components/Moviecard'
import axios from 'axios'
import Input from './components/Input'

const App = () => {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchMovies = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
      );
      setMovies(response.data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  } 

  const handleSearch = () => {
    fetchMovies()
  }

  

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 gap-8 justify-center align-center">
      <h1 className="text-4xl font-bold">Movies App</h1>
      <div className="flex flex-row items-center justify-center border-2 border-gray-200 rounded-2xl p-4">
        <Input
          onChange={(e) => {setQuery(e.target.value), 
            setMovies(movies.filter((movie) => movie.title.toLowerCase().includes(e.target.value.toLowerCase())))}}
          value={query} />
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
        >
          Search
        </button>
      </div>

      {loading && (<div>
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 border-t-blue-500 h-12 w-12 mb-4 motion-safe:animate-spin"></div>
        </div>
      )}
      {
        movies.length > 0 && (
          <p className="text-gray-500">Found {movies.length} movies</p>
        )
      }
      {
        movies.length === 0 && (<p className="text-gray-500">No movies found. Please click the search button to fetch popular movies.</p>
        )
      }


      <div className="flex flex-row flex-wrap justify-center gap-4 align-center items-center" >
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <Moviecard
              key={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              description={movie.overview}
              release_date={movie.release_date}
              rating={movie.vote_average}
            />
          ))}
      </div>
    </div>
  );
}

export default App
