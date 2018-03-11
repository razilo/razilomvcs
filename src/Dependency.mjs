import AppHeaderMiddleware from './Middleware/AppHeader.mjs';
import AppAuthorisationMiddleware from './Middleware/AppAuthorisation.mjs';
import AppFloodMiddleware from './Middleware/AppFlood.mjs';

import RouteDataInventoryMiddleware from './Middleware/RouteDataInventory.mjs';
import RouteDataNotificationMiddleware from './Middleware/RouteDataNotification.mjs';
import RouteDataOrderMiddleware from './Middleware/RouteDataOrder.mjs';

import RootRoutes from './Routes/Root.mjs';
import InventoryRoutes from './Routes/Inventory.mjs';
import NotificationRoutes from './Routes/Notification.mjs';
import OrderRoutes from './Routes/Order.mjs';

import TestService from './Services/Test.mjs';

/**
 * raziloMVCS Dependency
 * The base dependency stack for loading things such as middleware, services and applying them to the app stack.
 */
export default class Dependency
{
	constructor(app) {
		this.app = app;
		this.app.middleware = {};
		this.app.routes = {};
		this.app.services = {};

		this.loadAppMiddleware();
		this.loadRouteMiddleware();
		this.loadRoutes();
		this.loadServices();
	}

	loadAppMiddleware() {
		this.app.middleware.appHeader = new AppHeaderMiddleware();
		this.app.middleware.appAuthorisation = new AppAuthorisationMiddleware();
		this.app.middleware.appFlood = new AppFloodMiddleware();
	}

	loadRouteMiddleware() {
		this.app.middleware.routeDataInventory = new RouteDataInventoryMiddleware();
		this.app.middleware.routeDataNotification = new RouteDataNotificationMiddleware();
		this.app.middleware.routeDataOrder = new RouteDataOrderMiddleware();
	}

	loadRoutes() {
		this.app.routes.root = new RootRoutes();
		this.app.routes.inventory = new InventoryRoutes(this.app);
		this.app.routes.notification = new NotificationRoutes();
		this.app.routes.order = new OrderRoutes();
	}

	loadServices() {
		this.app.services.test = new TestService();
	}
}
