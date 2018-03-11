import Express from 'express';

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
	}

	/**
	 * load()
	 * Load the routes into the application stack
	 */
	load() {
		// load routes and route spcific middleware
		let rootRouter = Express.Router();
		this.app.routes.root.route(rootRouter);
		this.app.server.use(this.app.routes.root.baseRoute, rootRouter);

		// load routes and route spcific middleware
		let inventoryRouter = Express.Router();
		this.app.middleware.routeDataInventory.route(inventoryRouter);
		this.app.routes.inventory.route(inventoryRouter);
		this.app.server.use(this.app.routes.inventory.baseRoute, inventoryRouter);

		// load routes and route spcific middleware
		let notificationRouter = Express.Router();
		this.app.middleware.routeDataNotification.route(notificationRouter);
		this.app.routes.notification.route(notificationRouter);
		this.app.server.use(this.app.routes.notification.baseRoute, notificationRouter);

		// load routes and route spcific middleware
		let orderRouter = Express.Router();
		this.app.middleware.routeDataOrder.route(orderRouter);
		this.app.routes.order.route(orderRouter);
		this.app.server.use(this.app.routes.order.baseRoute, orderRouter);
	}
}
