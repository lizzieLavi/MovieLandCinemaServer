const express = require('express');

const router = express.Router();

const subscriptionsBL = require('../bl/subscriptionsbl');


router.route('/').get(async function(req,resp)
{
   let subscriptions = await subscriptionsBL.getAllsubscriptions()
   return resp.json(subscriptions)
})

router.route('/:id').get(async function(req,resp)
{
   let subscription = await subscriptionsBL.Getsubscription(req.params.id)
   return resp.json(subscription)
})

router.route('/ByUserId/:id').get(async function(req,resp)
{
   let subscription = await subscriptionsBL.GetsubscriptionsByUser(req.params.id)
   return resp.send(subscription)
})

router.route('').post(async function(req,resp)
{
   let obj = req.body
   let status = await subscriptionsBL.addSubscriptionData (obj)
   return resp.json(status)
})


router.route('/:id').put(async function(req,resp)
{
   let obj = req.body
   let id = req.params.id
   let status = await subscriptionsBL.updateSubscriptionData(id,obj)
   return resp.json(status)
})

router.route('/:id').delete(async function(req,resp)
{
   let id = req.params.id
   let status = await subscriptionsBL.deleteSubscriptionData(id)
   return resp.json(status)
})

module.exports = router;