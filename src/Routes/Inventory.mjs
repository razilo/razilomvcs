import InventoryController from '../Controllers/Inventory.mjs';

/**
 * raziloMVCS Route
 * Example of route, specify a base route, setup actions on the route to point ot static paths, controller mehtods and more
 */
export default class InventoryRoute
{
	constructor(app) {
		this.app = app;
		this.baseRoute = '/inventory';
		this.controller = new InventoryController();
	}

	/**
	 * route()
	 * Example of routes pointing to a controller
	 * @param Express.router router Express router object to apply routes to
	 */
	route(router) {
		router.get('/', this.controller.index.bind(this.app));
	}
}
