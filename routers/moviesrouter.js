const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const moviesBL = require('../bl/moviesbl');


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


router.route('/').get(async function(req,resp)
{
        var token=req.headers['x-access-token']
        
        if (!token)
          return resp.status(401).send({ auth: false, message: 'No token provided.' })

        if(validation(token)==false)
            return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

        else
        {
            let movies= await moviesBL.getMoviesData()
            return resp.json(movies);
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
          let movie = await moviesBL.getMovieData(req.params.id)
          return resp.json(movie);
        }
        catch
        {
          console.log('error')
        }

    }
})

router.route('').post(async function(req,resp)
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
          let obj = req.body;
          let status = await moviesBL.addMovieData(obj)
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
        try
        {

          console.log(req.params.id)
          let obj = req.body;
          let id = req.params.id;
        
          let status = await moviesBL.updateMovie(id,obj)
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
        try
        {
          let id = req.params.id;
          let status = await moviesBL.deleteMovieData(id)
          return resp.json(status);
        }
        catch
        {
          console.log('error')
        }
    }
})


module.exports = router;