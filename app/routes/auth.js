var authCtrl   = require('../controllers/auth');

module.exports = function(app, express) {
	var authRouter = express.Router();

	// route to authenticate a user (POST http://localhost:8080/api/authenticate)
	authRouter.post('/authenticate', authCtrl.authenticateUser);
	return authRouter;
};