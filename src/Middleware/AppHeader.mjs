import Middleware from '../Library/Middleware.mjs'

/**
 * raziloMVCS Middleware
 * Example of middleware performing an action on request and caling next middlware/route in stack
 */
export default class AppHeader extends Middleware
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
		console.log('1. check headers all present, if not return invalid response...');

		if (false) {
			console.log('bad headers');
			res.status(400).json({'status': 'error', 'message': 'invalid page headers'});
		} else {
			console.log('good headers');
			next();
		}
	}
}
