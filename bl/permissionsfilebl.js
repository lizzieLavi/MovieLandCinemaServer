const PermissionsFileDAL = require("../dal/permissionsdal")

const getPermissions = async function()
{
   let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
   return Permissions[0];
}

const getPermission = async function(id)
{  
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    console.log(Permissions[0].permissions)
    let Permission = Permissions[0].permissions.find(permission => permission.id == id)

    return Permission;
}

const addPermission = async function(obj)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let PermissionsArr=Permissions[0].permissions
    PermissionsArr.push(obj);
    console.log(PermissionsArr)
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB(Permissions[0]._id,PermissionsArr)

    return Status;
}

const updatePermission = async function(id,obj)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let PermissionIndex = Permissions[0].permissions.findIndex(permission => permission.id==id)
    PermissionsArr= Permissions[0].permissions
    PermissionsArr[PermissionIndex]=obj
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB(Permissions[0]._id,PermissionsArr)

    return Status;

}

const deletePermission = async function(id)
{
    let Permissions = await PermissionsFileDAL.readPermissionsJsonFromDB()
    let PermissionIndex = Permissions[0].permissions.findIndex(permission => permission.id==id)
    PermissionsArr = Permissions[0].permissions
    PermissionsArr.splice(PermissionIndex,1)
    let Status = await PermissionsFileDAL.writePermissionsJsonToDB (Permissions[0]._id,PermissionsArr)

    return Status;

}

module.exports = {getPermissions,getPermission,updatePermission,addPermission,deletePermission}