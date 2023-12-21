import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ movies }) => {
  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {movies?.map((movie) => (
          <Paper key={movie.id}> {/* Add a unique key for each element */}
            <div className='movie-card-container'>
              <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                <div className='movie-detail'>
                  <div className='movie-poster'>
                    <img src={movie.poster} alt='poster' />
                  </div>
                  <div className='movie-title'>
                    <h4>{movie.title}</h4>
                  </div>
                  <div className='movie-buttons-container'>
                    <div className='play-button-icon-container'>
                      <FontAwesomeIcon className='play-button-icon'
                      icon={faCirclePlay} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
