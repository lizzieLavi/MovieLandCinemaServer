const mongoose = require('mongoose'); 

let usersDetailsSchema = new mongoose.Schema({
  users: Array
});

module.exports = mongoose.model('usersDetails',usersDetailsSchema);
