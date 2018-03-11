import NotificationController from '../Controllers/Notification.mjs';

/**
 * raziloMVCS Route
 * Example of route, specify a base route, setup actions on the route to point ot static paths, controller mehtods and more
 */
export default class NotificationRoute
{
	constructor() {
		this.baseRoute = '/notification';
		this.controller = new NotificationController();
	}

	/**
	 * route()
	 * Example of routes pointing to a controller
	 * @param Express.router router Express router object to apply routes to
	 */
	route(router) {
		router.get('/', this.controller.index);
	}
}
