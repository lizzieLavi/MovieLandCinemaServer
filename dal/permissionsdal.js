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

const writePermissionsJsonToDB = function(id,permissionsArr)
{

    return new Promise((resolve,reject) =>
    {
      
        PermissionsModel.findByIdAndUpdate(id,
            {
               permissions: permissionsArr
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