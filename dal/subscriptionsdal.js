const axios = require('axios');

const getSubscriptions = function()
{
    return axios.get("https://subsws.herokuapp.com/subscriptions");
}

const getSubscription = function(id)
{
    
    return axios.get("https://subsws.herokuapp.com/subscriptions"+id);
}


const addSubscription = function(obj)
{
    return axios.post("https://subsws.herokuapp.com/subscriptions",obj);
}

const updateSubscription = function(id,obj)
{
    let url = "https://subsws.herokuapp.com/subscriptions/"+ id;
    return axios.put(url,obj);
}

const deleteSubscription = function(id)
{
    let url = "https://subsws.herokuapp.com/subscriptions/"+ id;
    return axios.delete(url);
}

const getSubscriptionsByUserId = function(id)
{
    return axios.get("https://subsws.herokuapp.com/subscriptions/ByUserId/"+id);
}


module.exports  =  {getSubscriptions,getSubscription,addSubscription,updateSubscription,deleteSubscription,getSubscriptionsByUserId}