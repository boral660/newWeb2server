var mongoose = require('mongoose');  
var ToDoSchema = new mongoose.Schema({  
  todo: String,
  enabled: Number,
  userEmail: String
});
mongoose.model('ToDo', ToDoSchema);

module.exports = mongoose.model('ToDo');