const axios = require('axios');

const getMembers = function()
{
    return axios.get("https://subsws.herokuapp.com/api/members");
}

const getMember = function(id)
{
    let url = "https://subsws.herokuapp.com/api/members"+ id;
    return axios.get(url);
}


const addMember = function(obj)
{
    return axios.post("https://subsws.herokuapp.com/api/members",obj);
}

const updateMember = function(id,obj)
{
    let url = "https://subsws.herokuapp.com/api/members/"+ id;
    return axios.put(url,obj);
}

const deleteMember = function(id)
{
    let url = "https://subsws.herokuapp.com/api/members/"+ id;
    return axios.delete(url);
}


module.exports  =  {getMembers,getMember ,addMember,updateMember,deleteMember}