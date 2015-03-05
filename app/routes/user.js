var bodyParser = require('body-parser'); 	// get body-parser
var userCtrl   = require('../controllers/user');


module.exports = function(app, express) {

	var apiRouter = express.Router();

	// test route to make sure everything is working
	// accessed at GET http://localhost:8080/api
	apiRouter.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });
	});

	// on routes that end in /users
	// ----------------------------------------------------
	apiRouter.route('/users')

		// create a user (accessed at POST http://localhost:8080/users)
		.post(userCtrl.create)

		// get all the users (accessed at GET http://localhost:8080/api/users)
		.get(userCtrl.getAll);

	// on routes that end in /users/:user_id
	// ----------------------------------------------------
	apiRouter.route('/users/:user_id')

		// get the user with that id
		.get(userCtrl.getUser)

		// update the user with this id
		.put(userCtrl.editUser)

		// delete the user with this id
		.delete(userCtrl.deleteUser);

	// api endpoint to get user information
	apiRouter.get('/me', function(req, res) {
		res.send(req.decoded);
	});

	return apiRouter;
};