import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { MovieInfo } from '../../widgets/MovieInfo/MovieInfo'
import { Preloader } from '../../widgets/Preloader/Preloader';

export function Movies() {

  let movies = useSelector(state => state.movies.movies)
  const currentPage = useSelector(state => state.movies.currentPage) 
  
  //  array created for pagination
  const [devidedMovies, setDevidedMovies] = useState([])

  // function taking 8 array elements
  const devideArray = (arr, index) => arr.splice((index - 1) * 8, 8)

  // take 4 store movies items
  const devideMovies = () => {
    setDevidedMovies(devideArray([...movies], currentPage))
  }

  useEffect(() => {
    devideMovies()
  }, [movies, currentPage])

  const isLoading = useSelector(state => state.movies.isLoading)

  return (
    <>
      { isLoading ? <Preloader />
      : devidedMovies.map((movie, index) => (
        <MovieInfo key={index} info={movie}>{movies[index].Title}</MovieInfo>
      ))}
    </>
  )
}
