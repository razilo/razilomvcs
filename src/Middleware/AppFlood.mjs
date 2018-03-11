import Middleware from '../Library/Middleware.mjs'

/**
 * raziloMVCS Middleware
 * Example of middleware performing an action on request and caling next middlware/route in stack
 */
export default class AppFlood extends Middleware
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
		console.log('3. check flood limit, now we know who is using the system and they are ok, we should check their overall flood limit...');

		if (false) {
			console.log('app flood limit reached...');
			res.status(429).json({'status': 'error', 'message': 'You have reached your allowed limit for application access'});
		} else {
			console.log('flood passed');
			next();
		}
	}
}
