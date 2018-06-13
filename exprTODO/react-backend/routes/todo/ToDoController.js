var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var ToDo = require('./ToDo');

// CREATES a new 
router.post('/create', function (req, res) {
    ToDo.create({
            todo : req.body.todo,
            userEmail : req.body.userEmail
        }, 
        function (err, ToDoList) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(ToDoList);
        });
});


// GETS A ALL TODO ONE USER FROM THE DATABASE
router.post('/getuserall', function (req, res) {
    ToDo.find({userEmail: req.body.userEmail}, function (err, ToDoList) {
        if (err) return res.status(500).send("There was a problem finding users todo");
        if (!ToDoList) return res.status(404).send("No users todo found.");
        res.status(200).send(ToDoList);
    });
});

// DELETES A SINGLE TODO FROM THE DATABASE
router.post('/removeOneTodo', function (req, res) {
    ToDo.remove({userEmail: req.body.userEmail, todo: req.body.todo}, function (err, ToDoList) {
        if (err) return res.status(500).send("There was a problem deleting the todo.");
        res.status(200).send("Todo was deleted.");
    });
});


module.exports = router;