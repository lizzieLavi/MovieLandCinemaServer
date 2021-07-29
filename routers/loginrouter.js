const express = require('express');
const jwt = require('jsonwebtoken');
const UsersBL = require('../bl/usersbl')
var router = express.Router();


const  validation =(token) =>
{
    const RSA_PRIVATE_KEY = 'somekey'

    if (!token)
        return res.status(401).send({ auth: false, message: 'No token provided.' })
        
    
    jwt.verify(token, RSA_PRIVATE_KEY, async function(err) 
    {
        if (err) 
          return false;
        else
          return true;
    })
}

router.post('/logIn', async function(req, res)
{
  const userName = req.body.username;
  const Password = req.body.password;

  let User = await UsersBL.userLogIn(userName,Password)

  if(User) 
  {
    const userId = User._id; 
    const RSA_PRIVATE_KEY = 'somekey';

    var userToken = jwt.sign({ id: userId },
                             RSA_PRIVATE_KEY,
                            {expiresIn: 7200} 
                            );
                          
    res.status(200).send({User, token:userToken });
  }
  else
  {
    res.send("not found"); 
  }

});

router.post('/', async function(req, res)
{

  const userName = req.body.username;
  const Password = req.body.password;
    
  var token=req.headers['x-access-token']    

  if(validation(token)==false)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

  else
  {
    obj = {UserName:userName,Password:Password};
    let status = await UsersBL.addUserLogIn(obj)
    return res.json(status);
  }

});



  router.route('/').get(async function(req,resp)
    {
        let users = await UsersBL.getAllUsersLogIn()
        return resp.json(users);
    })

    router.route('/:id').get(async function(req,resp)
    {
        let user = await UsersBL.getUserLogIn(req.params.id)
        return resp.json(user);

    })

    router.route('/:id').put(async function(req,resp)
    {
        
        let id = req.params.id;
        let obj = req.body;


        let users = await UsersBL.updateUserLogIn(id,obj)
        return resp.json(users);
    })



    router.route('/:id').delete(async function(req,resp)
    {
        let id = req.params.id;

        let status = await UsersBL.deleteUserLogIn(id)
        return resp.json(status);
    })

  


    

  module.exports = router;