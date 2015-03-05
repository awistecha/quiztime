var bodyParser = require('body-parser'); 	// get body-parser
var questionCtrl   = require('../controllers/question');


module.exports = function(app, express) {

	var questionRouter = express.Router();

	questionRouter.route('/question')

		.get(questionCtrl.getAll)
		.post(questionCtrl.create);


	return questionRouter;
};