const mongoose = require('mongoose'); 

let PermissionsSchema = new mongoose.Schema({
  permissions: Array
});

module.exports = mongoose.model('permissions',PermissionsSchema);
