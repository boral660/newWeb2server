var mongoose = require('mongoose');  
var ToDoSchema = new mongoose.Schema({  
  todo: String,
  userEmail: String
});
mongoose.model('ToDo', ToDoSchema);

module.exports = mongoose.model('ToDo');