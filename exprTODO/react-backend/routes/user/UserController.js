var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');

// CREATES A NEW USER
router.post('/create', function (req, res) {
    console.log(req.body);
    User.create({
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// GETS A SINGLE USER FROM THE DATABASE
router.post('/getByEmail', function (req, res) {
    var email = req.body.email;
    User.findOne({email}, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(200).send({fail : true});
        res.status(200).send(user);
    });
});


module.exports = router;