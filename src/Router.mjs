import Express from 'express';

import BirdsBeforeMiddleware from './Middleware/BirdsBefore.mjs';
import BirdsAfterMiddleware from './Middleware/BirdsAfter.mjs';
import CarsMiddleware from './Middleware/Cars.mjs';

import AssetsRoutes from './Routes/Assets.mjs';
import BirdsRoutes from './Routes/Birds.mjs';
import CarsRoutes from './Routes/Cars.mjs';

/**
 * raziloMVCS Application
 * The base router that we use to organise all the routes we have and apply them to the stack
 */
export default class Router
{
	constructor(app) {
		// basic setup
		this.app = app;
		this.app.router = this;
		this.app.routes = {};

		// setup routes
		this.app.routes.assets = new AssetsRoutes();
		this.app.routes.birds = new BirdsRoutes();
		this.app.routes.cars = new CarsRoutes();
	}

	/**
	 * load()
	 * Load the routes into the application stack
	 */
	load() {
		// load routes and route spcific middleware
		let assetsRouter = Express.Router();
		this.app.routes.assets.route(assetsRouter);
		this.app.server.use(this.app.routes.assets.baseRoute, assetsRouter);

		// load routes and route spcific middleware
		let birdsRouter = Express.Router();
		this.app.middleware.birdsBefore.route(birdsRouter);
		this.app.routes.birds.route(birdsRouter);
		this.app.middleware.birdsAfter.route(birdsRouter);
		this.app.server.use(this.app.routes.birds.baseRoute, birdsRouter);

		// load routes and route spcific middleware
		let carsRouter = Express.Router();
		this.app.middleware.carsMiddleware.route(carsRouter);
		this.app.routes.cars.route(carsRouter);
		this.app.server.use(this.app.routes.cars.baseRoute, carsRouter);
	}
}
