const PermissionsFileDAL = require("../dal/filesdal")

const getPermissions = async function()
{
   let Permissions = await PermissionsFileDAL.readFile("./Files/Permissions.json")

   return Permissions;
}

const getPermission = async function(id)
{  

    let Permissions = await PermissionsFileDAL.readFile("./Files/Permissions.json")
    let Permission = Permissions.permissions.find(permission => permission.id == id)

    return Permission;
}

const addPermission = async function(obj)
{
    let Permissions = await PermissionsFileDAL.readFile("./Files/Permissions.json")
    Permissions.permissions.push(obj);
    let Status = await PermissionsFileDAL.writeToFile("./Files/Permissions.json",Permissions)

    return Status;
}

const updatePermission = async function(id,obj)
{
    let Permissions = await PermissionsFileDAL.readFile("./Files/Permissions.json")
    let PermissionIndex = Permissions.permissions.findIndex(permission => permission.id==id)
    Permissions.permissions[PermissionIndex] = obj
    let Status = await PermissionsFileDAL.writeToFile("./Files/Permissions.json",Permissions)

    return Status;

}

const deletePermission = async function(id)
{
    let Permissions = await PermissionsFileDAL.readFile("./Files/Permissions.json")
    let PermissionIndex = Permissions.permissions.findIndex(permission => permission.id==id)
    Permissions.permissions.splice(PermissionIndex,1)
    let Status = await PermissionsFileDAL.writeToFile("./Files/Permissions.json",Permissions)

    return Status;

}

module.exports = {getPermissions,getPermission,updatePermission,addPermission,deletePermission}