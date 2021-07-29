const express = require('express');
const router = express.Router();
const MembersBL = require('../bl/membersbl');


router.route('/').get(async function(req,resp)
{

   let members = await MembersBL.getMembersData()
   return resp.json(members)

})

router.route('/:id').get(async function(req,resp)
{
   let member = await MembersBL.getMemberData(req.params.id)
   return resp.json(member)
})

router.route('/:id').get(async function(req,resp)
{
   let member = await MembersBL.getMemberData(req.params.id)
   return resp.json(member)
})

router.route('').post(async function(req,resp)
{
   let obj = req.body
   let status = await MembersBL.addMemberData(obj)
   return resp.json(status)
})


router.route('/:id').put(async function(req,resp)
{
   let obj = req.body
   let id = req.params.id
   let status = await MembersBL.updateMemberData(id,obj)
   return resp.json(status)
})

router.route('/:id').delete(async function(req,resp)
{
   let id = req.params.id
   let status = await MembersBL.deleteMemberData(id)
   return resp.json(status)
})

module.exports = router;