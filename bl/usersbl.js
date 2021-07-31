const axios = require('axios');
const usersModel = require('../models/usersmodel');
const UsersFileDAL = require("../dal/filesdal");
const PermissionsBL = require('../bl/permissionsfilebl');




const userLogIn = async function(userName,Password)
{
    let Users = await getAllUsersLogIn()
    let UserLogIn = Users.find(user => user.UserName == userName && user.Password == Password)


    return(UserLogIn)
}

const getAllUserDetails = async function()
{

    var UsersArr =[]
    let Users= await getUsersDetails()
       

    await Promise.all(Users.users.map(async(user) => 
        {
            let logInData= await axios.get("https://subsws.herokuapp.com/api/LogIn/" +user.id)
            let PermissionsData = await PermissionsBL.getPermissions()
            



            let UserDataObj={user:user,logIn:logInData.data,Permissions:PermissionsData.data}

            UsersArr=[...UsersArr,UserDataObj]

         
       }))

       return (UsersArr)
}

const CurrentUserData = async function(id)
{
    let PermissionsData = await axios.get("http://localhost:3000/api/Permissions/"+id)
    let UserData= await getUserDetails(id)
    let obj ={UserData:UserData, UserPermissions: PermissionsData.data.permissions}
    return(obj)

}


const getAllUsersLogIn = function()
{
    return new Promise((resolve, reject) =>
        {
            usersModel.find({}, function(err,users) 
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve(users);
                }
            })
        })
}

const getUserLogIn = function(id)
{
    return new Promise((resolve, reject) =>
        {
            usersModel.findById(id, function(err,user) 
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve(user);
                }
            })
        })
}

const addUserLogIn = function(user)
{
    return new Promise((resolve, reject) =>
        {
            const u = new usersModel({
                UserName: user.UserName,
                Password: user.Password
            });

            u.save(function(err,result) 
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    var res={status:'created',userId:result._id}
                    resolve(res);
                }
            })
        })
}

const updateUserLogIn = function(id,user)
{
    return new Promise((resolve, reject) =>
    {
        usersModel.findByIdAndUpdate(id,
            {
                UserName: user.UserName,
                Password: user.Password

            }, function(err) 
             {       
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Updated');
            }
        })
    })
}

const deleteUserLogIn = function(id)
{

    return new Promise((resolve, reject) =>
    {
        usersModel.findByIdAndDelete(id, function(err) 
             {       
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted');
            }
        })
    })
}

const getUsersDetails = async function()
{
   let Users = await UsersFileDAL.readFile("./Files/users.json")
   
   return Users;
}

const getUserDetails = async function(id)
{
    let Users = await UsersFileDAL.readFile("./Files/users.json")
    let User = Users.users.find(user => user.id == id)

    return User;
}

const addUserDetails = async function(obj)
{
    let Users = await UsersFileDAL.readFile("./Files/users.json")
    Users.users.push(obj);
    let Status = await UsersFileDAL.writeToFile("./Files/users.json",Users)

    return Status;
}

const updateUserDetails = async function(id,obj)
{
    let Users = await UsersFileDAL.readFile("./Files/users.json")
    let UserIndex = Users.users.findIndex(user => user.id==id)
    Users.users[UserIndex] = obj
    let Status = await UsersFileDAL.writeToFile("./Files/users.json",Users)

    return Status;

}

const deleteUserDetails = async function(id)
{
    let Users = await UsersFileDAL.readFile("./Files/users.json")
    let UserIndex = Users.users.findIndex(user => user.id==id)
    Users.users.splice(UserIndex,1)
    let Status = await UsersFileDAL.writeToFile("./Files/users.json",Users)

    return Status;

}

module.exports = {getAllUsersLogIn,getUserLogIn,addUserLogIn,updateUserLogIn,deleteUserLogIn,userLogIn,
getUsersDetails,getUserDetails,updateUserDetails,addUserDetails,deleteUserDetails,getAllUserDetails,CurrentUserData}