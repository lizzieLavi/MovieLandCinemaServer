const PermissionsFileDAL = require("../dal/permissionsdal")

const getPermissions = async function()
{
   let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
   return Permissions;
}

const getPermission = async function(id)
{  
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    console.log(Permissions[0].permissions)
    let Permission = Permissions[0].permissions.find(permission => permission._id == id)

    return Permission;
}

const addPermission = async function(obj)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    Permissions[0].permissions.push(obj);
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB(Permissions)

    return Status;
}

const updatePermission = async function(id,obj)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let PermissionIndex = Permissions[0].permissions.findIndex(permission => permission._id==id)
    Permissions[0].permissions[PermissionIndex] = obj
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB(Permissions)

    return Status;

}

const deletePermission = async function(id)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let PermissionIndex = Permissions[0].permissions.findIndex(permission => permission.id==id)
    Permissions.permissions.splice(PermissionIndex,1)
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB (Permissions)

    return Status;

}

module.exports = {getPermissions,getPermission,updatePermission,addPermission,deletePermission}