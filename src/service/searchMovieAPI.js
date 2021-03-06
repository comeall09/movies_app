import * as axios from 'axios'

const API_KEY = '4687b36d'

export const searchApi = {
  findMovie(movieTitle, pageNum){
    return axios.get(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}&page=${pageNum}`)
      .then(response => { return response.data })
  },
  fetchInfo(movieTitle){
    return axios.get(`https://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=${API_KEY}`)
      .then(response => { return response.data })
  }
}