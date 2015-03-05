var bodyParser = require('body-parser'); // get body-parser
var User = require('../models/user');
var Question = require('../models/question');

exports.getAll = function(req, res) {
    Question.find({}, function(err, questions) {
        if (err)
            res.json(err);
        res.json(questions);
    });
};

exports.create = function(req, res) {
    var question = new Question();
    question.title = req.body.title;
    console.log(req);
    question.popupTime = req.body.popupTime;
    question.level = req.body.level;

    question.save(function(err) {
        if (err) {
            // duplicate entry
            console.log(err)
            return res.send(err);
        }

        // return a message
        res.json({
            message: 'User created!'
        });
    });
}