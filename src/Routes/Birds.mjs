import BirdsController from '../Controllers/Birds.mjs';

/**
 * raziloMVCS Route
 * Example of route, specify a base route, setup actions on the route to point ot static paths, controller mehtods and more
 */
export default class BirdsRoute
{
	constructor() {
		this.baseRoute = '/birds';
		this.controller = new BirdsController();
	}

	/**
	 * route()
	 * Example of routes pointing to a controller
	 * @param Express.router router Express router object to apply routes to
	 */
	route(router) {
		router.get('/', this.controller.index);
		router.get('/about', this.controller.about);
		router.get('/boom', this.controller.boom);
	}
}
