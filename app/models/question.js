var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
    answer: String,
    correct: Boolean
});

var correctAnswerCount = new Schema({
    correct: Number,
    wrong: Number
});

var LikeCount = new Schema({
    likes: Number,
    dislikes: Number
});

var QuestionSchema = new Schema({
    title: String,
    topics: String,
    popupTime: Number,
    creator: String,
    level: Number,
    likeCount: [LikeCount],
    correctAnswerCount: [correctAnswerCount],
    hint: String,
    answers: [answerSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);