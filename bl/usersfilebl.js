const UsersFileDAL = require("../dal/filesdal")

const getUsers = async function()
{
   let Users = await UsersFileDAL.readFile("./Files/users.json")
   
   return Users;
}

const getUser = async function(id)
{
    let Users = await UsersFileDAL.readFile("./Files/users.json")
    let User = Users.users.find(user => user.id == id)

    return User;
}

const addUser = async function(obj)
{
    let Users = await UsersFileDAL.readFile("./Files/users.json")
    Users.users.push(obj);
    let Status = await UsersFileDAL.writeToFile("./Files/users.json",Users)

    return Status;
}

const updateUser = async function(id,obj)
{
    let Users = await UsersFileDAL.readFile("./Files/users.json")
    let UserIndex = Users.users.findIndex(user => user.id==id)
    Users.users[UserIndex] = obj
    let Status = await UsersFileDAL.writeToFile("./Files/users.json",Users)

    return Status;

}

const deleteUser = async function(id)
{
    let Users = await UsersFileDAL.readFile("../Files/users.json")
    let UserIndex = Users.users.findIndex(user => user.id==id)
    Users.users.splice(UserIndex,1)
    let Status = await UsersFileDAL.writeToFile(Users)

    return Status;

}

module.exports = {getUsers,getUser,updateUser,addUser,deleteUser}