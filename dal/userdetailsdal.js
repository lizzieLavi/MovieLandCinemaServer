const UsersDetailsModel = require('../models/usersdetailsmodel');

const readUserDetailsJsonFromDB = function()
{

      return new Promise((resolve,reject) =>
      {
        UsersDetailsModel.find({},function(err,usersDetails)
        {
            if(err)
            reject(err)

            else
              resolve(usersDetails)

          })
      })

}

const writeUserDetailsJsonToDB = function(usersDetailsArr)
{

    return new Promise((resolve,reject) =>
    {
      
        UsersDetailsModel.findByIdAndUpdate(usersDetailsArr._id,
            {
               users:usersDetailsArr.users
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



module.exports = {readUserDetailsJsonFromDB ,writeUserDetailsJsonToDB }