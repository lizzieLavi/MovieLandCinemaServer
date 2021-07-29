const MoviesDAL = require("../dal/moviesdal")

const getMoviesData = async function()
{
    let Movies = await MoviesDAL.getMovies();
    
    return Movies.data;

}

const getMovieData = async function(id)
{
    let Movie = await MoviesDAL.getMovie(id);
    return Movie.data;
}


const addMovieData = async function(obj)
{
    let Status = await MoviesDAL.addMovie(obj);
   return Status.data;
}

const updateMovieData = async function(id,obj)
{
    let Status = await MoviesDAL.updateMovie(id,obj);
    return Status.data;
}

const deleteMovieData = async function(id)
{
    let Status = await MoviesDAL.deleteMovie(id);
    return Status.data;
}


module.exports = {getMoviesData,getMovieData,addMovieData,updateMovieData,deleteMovieData}