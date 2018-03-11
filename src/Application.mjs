import Express from 'express';
import Dependency from './Dependency.mjs';
import Router from './Router.mjs';

/**
 * raziloMVCS Application
 * The base application from which we build our application, bootstrapped by the index.mjs root file
 */
export default class Application
{
	constructor() {
		this.server = new Express();
		new Dependency(this);
		new Router(this);
	}

	/**
	 * run()
	 * Application start point
	 * @param int port The port to start running on
	 */
	run(port) {
		// app wide middleware
		this.server.use(this.middleware.appHeader.invoke);
		this.server.use(this.middleware.appAuthorisation.invoke);
		this.server.use(this.middleware.appFlood.invoke);

		// load router after application middleware
		this.router.load();

		// start server on port XX
		this.server.listen(port);
	}
}
