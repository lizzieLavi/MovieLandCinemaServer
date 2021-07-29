const SubscriptionsDAL = require("../dal/subscriptionsdal")
const moviesDAL = require("../DAL/MoviesDAL")



const getSubscriptionsData = async function()
{
    let Subscriptions = await SubscriptionsDAL.getSubscriptions();
   return Subscriptions.data;
}

const getSubscriptionData = async function(id)
{
    let Subscription = await SubscriptionsDAL.getSubscription(id);
   return Subscription.data;
}




const addSubscriptionData = async function(obj)
{
    let Status = await SubscriptionsDAL.addSubscription(obj);
   return Status.data;
}

const updateSubscriptionData = async function(id,obj)
{
    let Status = await SubscriptionsDAL.updateSubscription(id,obj);
    return Status.data;
}

const deleteSubscriptionData = async function(id)
{
    let Status = await SubscriptionsDAL.deleteSubscription(id);
    return Status.data;
}

const GetsubscriptionsByUser = async function(id)
{
    let Subscriptions = await SubscriptionsDAL.getSubscriptionsByUserId(id);
    let AllMovies=await moviesDAL.getMovies()
    let MoviesWatchedArr=[];
    
    if(Subscriptions.data.length>0)
    {
      

      
      await Promise.all(Subscriptions.data[0].Movies.map(async(movie) => 
      {
         movieDetails = await moviesDAL.getMovie(movie.id)
         allMovieData= {MovieDetails: movieDetails.data, SubMovieInfo: movie}
         MoviesWatchedArr=[...MoviesWatchedArr,allMovieData]

      }))

    let MoviesNotWatchedArr=[]
    

    await Promise.all(AllMovies.data.map(async movie1 =>
    { 
        let flag=true

        await Promise.all(MoviesWatchedArr.map(movie2 =>
        {
             if(movie2.MovieDetails._id == movie1._id)
 
               flag=false
        }))

        if(flag == true)
           MoviesNotWatchedArr.push(movie1)

    }))



  
    
   return {MoviesWatched:MoviesWatchedArr,MoviesNotWatched: MoviesNotWatchedArr,Subscription: Subscriptions.data[0]};
  }

  else return {MoviesWatched: MoviesWatchedArr, MoviesNotWatched: AllMovies.data,Subscription: "noSubYet"}
}

module.exports = {getSubscriptionsData,getSubscriptionData,addSubscriptionData,updateSubscriptionData,deleteSubscriptionData,GetsubscriptionsByUser}