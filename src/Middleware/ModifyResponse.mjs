import Middleware from '../Library/Middleware.mjs'

/**
 * raziloMVCS Middleware
 * Example of middleware performing an action on request and caling next middlware/route in stack
 */
export default class ModifyResponseMiddleware extends Middleware
{
	/**
	 * invoke
	 * Example of middleware performing an action on response, modifying the result (must be called before route, app wide middleware
	 * @param Express.Request req Express request object
	 * @param Express.Response res Express response object
	 * @param Express.next next Express next method to call next middleware/route in stack
	 */
	invoke(req, res, next) {
		// if you want to modify the response it must go before the response is sent by either another middleware or a route!
		let send = res.send;
		res.send = function(body){
			body = "modified : " + body;
			send.call(this, body);
		}

		// res.statusCode = 400;

    	next();
	}
}
