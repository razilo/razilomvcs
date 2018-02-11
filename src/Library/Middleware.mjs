/**
 * raziloMVCS Middleware Base Class
 * Provides base functionality to middleware
 */
export default class Middleware
{
	constructor(router) {
		this.router = router;
	}

	/**
	 * route()
	 * Allow the middleware to be used directly (invoked) or through a route using this method
	 * @param Express.Router router the express router object to invoke middleware on if choosing to apply middleware to a route instead of app wide
	 */
	route(router) {
		this.router = router;
		this.router.use(this.invoke);
		return this.router;
	}
}
