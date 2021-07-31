const axios = require('axios');

const getMovies = function()
{
    return axios.get("https://subsws.herokuapp.com/movies");
}

const getMovie = function(id)
{
    let url = "https://subsws.herokuapp.com/movies/"+ id;
    return axios.get(url);
}


const addMovie = function(obj)
{
    return axios.post("https://subsws.herokuapp.com/movies",obj);
}

const updateMovie = function(id,obj)
{
    let url = "https://subsws.herokuapp.com/movies/"+ id;
    return axios.put(url,obj);
}

const deleteMovie = function(id)
{
    let url = "https://subsws.herokuapp.com/movies/"+ id;
    return axios.delete(url);
}


module.exports  =  {getMovies,getMovie ,addMovie,updateMovie,deleteMovie}