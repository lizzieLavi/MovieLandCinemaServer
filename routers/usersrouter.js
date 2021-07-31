const express = require('express');
const router = express.Router();
const usersBL = require('../bl/usersbl');
const jwt = require('jsonwebtoken');
const { default: axios } = require('axios');

const  validation =(token) =>
{
    const RSA_PRIVATE_KEY = 'somekey'

        
    
    jwt.verify(token, RSA_PRIVATE_KEY, async function(err) 
    {
        if (err) 
          return false;
        else
          return true;
    })
}

router.route('/CurrentUserData/:id').get(async function(req,resp)
{
  var token=req.headers['x-access-token']


  if (!token)
    return resp.status(401).send({ auth: false, message: 'No token provided.' })
        
  if(validation(token)==false)
    return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

  else
  {
    try
    {
      let userInfo= await usersBL.CurrentUserData(req.params.id)
      resp.set('Access-Control-Allow-Origin', '*');
      return resp.send(userInfo);
    }
    catch
    {
      console.log('error')
    }
  }
});

router.route('/AllUsersInfo').get(async function(req,resp)
{
  var token=req.headers['x-access-token']

  if (!token)
    return resp.status(401).send({ auth: false, message: 'No token provided.' })
        
  if(validation(token)==false)
      return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

  else
  {
     try
     {
        let usersFullData = await usersBL.getAllUserDetails()
        return resp.json(usersFullData);
     }
    catch
    {
      console.log('error')
    }
}

})

router.route('/').get(async function(req,resp)
{
    var token=req.headers['x-access-token']

    if (!token)
      return resp.status(401).send({ auth: false, message: 'No token provided.' })
        
    if(validation(token)==false)
        return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    else
    {
       try
       {
          let users = await usersBL.getUsersDetails()
          return resp.json(users);
       }
        catch
        {
          console.log('error')
        }
    }
})

router.route('/:id').get(async function(req,resp)
{
    var token=req.headers['x-access-token']

    if (!token)
      return resp.status(401).send({ auth: false, message: 'No token provided.' })
        

    if(validation(token)==false)
        return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    else
    {
      try
      {
        let user = await usersBL.getUserDetails(req.params.id)
        return resp.json(user);
      }
      catch
      {
        console.log('error')
      }
    }
})

router.route('') .post(async function(req,resp)
{
    var token=req.headers['x-access-token']

    if (!token)
      return resp.status(401).send({ auth: false, message: 'No token provided.' })
        
    if(validation(token)==false)
        return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    else
    {
      let obj = req.body;
        
      try
      {
        let status = await usersBL.addUserDetails(obj)
        return resp.json(status);
      }    
      catch
      {
        console.log('error')
      }
    }
})

router.route('/:id').put(async function(req,resp)
{
    var token=req.headers['x-access-token']

    if (!token)
      return resp.status(401).send({ auth: false, message: 'No token provided.' })
        

    if(validation(token)==false)
        return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    else
    {
      let obj = req.body;
      let id = req.params.id;
        
      try
      {
        let status = await usersBL.updateUserDetails(id,obj)
        return resp.json(status);
      }
      catch
      {
        console.log('error')
      }
    }
})

router.route('/:id').delete(async function(req,resp)
{
    var token=req.headers['x-access-token']

    if (!token)
      return resp.status(401).send({ auth: false, message: 'No token provided.' })
        
    if(validation(token)==false)
        return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    else
    {
      let id = req.params.id;

      try
      {
        let status = await usersBL.deleteUserDetails(id)
        return resp.json(status);
      }
      catch
      {
        console.log('error')
      }
    }
})


module.exports = router;