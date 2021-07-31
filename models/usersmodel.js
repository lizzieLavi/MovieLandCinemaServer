const mongoose = require('mongoose'); 

let usersSchema = new mongoose.Schema({
  UserName: String,
  Password: String
});

module.exports = mongoose.model('users',usersSchema);
