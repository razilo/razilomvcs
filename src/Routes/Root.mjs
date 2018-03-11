import RootController from '../Controllers/Root.mjs';

/**
 * raziloMVCS Route
 * Example of route, specify a base route, setup actions on the route to point ot static paths, controller mehtods and more
 */
export default class RootRoute
{
	constructor() {
		this.baseRoute = '/';
		this.controller = new RootController();
	}

	/**
	 * route()
	 * Example of routes pointing to a controller
	 * @param Express.router router Express router object to apply routes to
	 */
	route(router) {
		router.get('/', this.controller.index);
		router.get('/find-out-more', this.controller.findOutMore);
	}
}
