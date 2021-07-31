const PermissionsFileDAL = require("../dal/permissionsdal")

const getPermissions = async function()
{
   let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()

   return Permissions;
}

const getPermission = async function(id)
{  
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let Permission = Permissions.permissions.find(permission => permission.id == id)

    return Permission;
}

const addPermission = async function(obj)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    Permissions.permissions.push(obj);
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB(Permissions)

    return Status;
}

const updatePermission = async function(id,obj)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let PermissionIndex = Permissions.permissions.findIndex(permission => permission.id==id)
    Permissions.permissions[PermissionIndex] = obj
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB(Permissions)

    return Status;

}

const deletePermission = async function(id)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let PermissionIndex = Permissions.permissions.findIndex(permission => permission.id==id)
    Permissions.permissions.splice(PermissionIndex,1)
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB (Permissions)

    return Status;

}

module.exports = {getPermissions,getPermission,updatePermission,addPermission,deletePermission}