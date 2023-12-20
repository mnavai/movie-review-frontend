import './App.css';
import api from './API/axiosConfig';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      
      const response = await api.get('/api/v1/movies');
      console.log('Response Data:', response.data);
      setMovies(response.data);
    } catch (err) {
      console.error('Error:', err);
    }
  };
  
  
  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div className="App">
   
    </div>
  );
}

export default App;
