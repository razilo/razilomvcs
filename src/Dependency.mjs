import BirdsBeforeMiddleware from './Middleware/BirdsBefore.mjs';
import BirdsAfterMiddleware from './Middleware/BirdsAfter.mjs';
import BirdsRoutes from './Routes/Birds.mjs';
import CarsMiddleware from './Middleware/Cars.mjs';
import CarsRoutes from './Routes/Cars.mjs';

/**
 * raziloMVCS Dependency
 * The base dependency stack for loading things such as middleware, services and applying them to the app stack.
 */
export default class Dependency
{
	constructor(app) {
		this.app = app;
		this.app.middleware = {};

		// middlewear
		this.app.middleware.birdsBefore = new BirdsBeforeMiddleware();
		this.app.middleware.birdsAfter = new BirdsAfterMiddleware();
		this.app.middleware.carsMiddleware = new CarsMiddleware();
	}
}
