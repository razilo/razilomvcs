import Express from 'express';
import Path from 'path';

/**
 * raziloMVCS Route
 * Example of route, specify a base route, setup actions on the route to point ot static paths, controller mehtods and more
 */
export default class AssetsRoute
{
	constructor() {
		this.baseRoute = '/assets';
	}

	/**
	 * route()
	 * Example of route used to serve static path for things like exposing style, logic (assets)
	 * @param Express.router router Express router object to apply routes to
	 */
	route(router) {
		// serve a static folder
		router.use('/style', Express.static(Path.resolve() + '/public/assets/style'));
	}
}
