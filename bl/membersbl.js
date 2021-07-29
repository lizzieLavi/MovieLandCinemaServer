const MembersDAL = require("../dal/membersdal")

const getMembersData = async function()
{
    let Members = await MembersDAL.getMembers();
    return Members.data;
}

const getMemberData = async function(id)
{
    let Member = await MembersDAL.getMember(id);
    return Member.data;
}


const addMemberData = async function(obj)
{
    let Status = await MembersDAL.addMember(obj);
   return Status.data;
}

const updateMemberData = async function(id,obj)
{
    let Status = await MembersDAL.updateMember(id,obj);
    return Status.data;
}

const deleteMemberData = async function(id)
{
    let Status = await MembersDAL.deleteMember(id);
    return Status.data;
}


module.exports = {getMembersData,getMemberData,addMemberData,updateMemberData,deleteMemberData}