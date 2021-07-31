const PermissionsModel = require('../models/permissionsmodel');

const readPermissionsJsonFromDB = function()
{

      return new Promise((resolve,reject) =>
      {
        PermissionsModel.find({},function(err,permissions)
        {
            if(err)
            reject(err)

            else
              resolve(permissions)

          })
      })

}

const writePermissionsJsonToDB = function(permissionsArr)
{

    return new Promise((resolve,reject) =>
    {
      
        PermissionsModel.findByIdAndUpdate(permissionsArr._id,
            {
               permissions: permissionsArr.permissions
            },
            function(err)
            {
              if(err)
                 reject(err)

              else
                resolve('Updated!')
        })
    })
}



module.exports = {readPermissionsJsonFromDB,writePermissionsJsonToDB }