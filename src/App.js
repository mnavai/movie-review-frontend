import './App.css';
import api from './API/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Trailer from './components/movietrailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([])

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");
      console.log("response",response.data)
      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {

    try {

      const response = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = response.data
      setMovie(singleMovie)
      if (Array.isArray(singleMovie.reviews)) {
        setReviews(singleMovie.reviews);
      } else {
        setReviews([]); // Set to an empty array if reviews is not an array
      }

    } catch(err) {
      console.error(err);
    }

  }

  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies} />} ></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews={reviews} setReviews = {setReviews} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
