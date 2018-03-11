import Middleware from '../Library/Middleware.mjs'

/**
 * raziloMVCS Middleware
 * Example of middleware performing an action on request and caling next middlware/route in stack
 */
export default class AppAuthorisation extends Middleware
{
	constructor() {
		super();
	}

	/**
	 * invoke
	 * Example of middleware performing an action on response, modifying the result (must be called before route, app wide middleware
	 * @param Express.Request req Express request object
	 * @param Express.Response res Express response object
	 * @param Express.next next Express next method to call next middleware/route in stack
	 */
	invoke(req, res, next) {
		console.log('2. check authorisation, by checking passed in api keys against user from db, do this later...');

		if (false) {
			console.log('unauthorised...');
			res.status(401).json({'status': 'error', 'message': 'You do not have permission to access this resource'});
		} else {
			console.log('authorised');
			next();
		}
	}
}
