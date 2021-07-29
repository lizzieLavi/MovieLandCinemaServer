const express = require('express');

const router = express.Router();

const PermissionsBL = require('../bl/permissionsfilebl');


router.route('/').get(async function(req,resp)
{
   let permissions = await PermissionsBL.getPermissions()
   return resp.json(permissions)
})

router.route('/:id').get(async function(req,resp)
{
   let permission = await PermissionsBL.getPermission(req.params.id)
   return resp.json(permission)
})


router.route('').post(async function(req,resp)
{
   let obj = req.body
   let status = await PermissionsBL.addPermission(obj)
   return resp.json(status)
})


router.route('/:id').put(async function(req,resp)
{
   let obj = req.body
   let id = req.params.id
   let status = await PermissionsBL.updatePermission(id,obj)
   return resp.json(status)
})

router.route('/:id').delete(async function(req,resp)
{
   let id = req.params.id
   let status = await PermissionsBL.deletePermission(id)
   return resp.json(status)
})

module.exports = router;