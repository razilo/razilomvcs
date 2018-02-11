/**
 * raziloMVCS Route
 * Example of route, specify a base route, setup actions on the route to point ot static paths, controller mehtods and more
 */
export default class CarsRoute
{
	constructor() {
		this.baseRoute = '/cars';
	}

	/**
	 * route()
	 * Example of routes used to output response directly (you can do this, but.... use a controller though, makes sense)
	 * @param Express.router router Express router object to apply routes to
	 */
	route(router) {
		// define the home page route
		router.get('/', function (req, res) {
			res.send('Cars home page');
		});

		// define the about route
		router.get('/about', function (req, res) {
			res.send('About cars');
		});
	}
}
