import Middleware from '../Library/Middleware.mjs'

/**
 * raziloMVCS Middleware
 * Example of middleware performing an action on request and caling next middlware/route in stack
 */
export default class CarsMiddleware extends Middleware
{
	constructor() {
		super();
	}
	
	/**
	 * invoke()
	 * the middleware method, perofrm something awesome
	 * @param Express.Request req Express request object
	 * @param Express.Response res Express response object
	 * @param Express.next next Express next method to call next middleware/route in stack
	 */
	invoke(req, res, next) {
		console.log('Cars Time: ', Date.now());
		next();
	}
}
