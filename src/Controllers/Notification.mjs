import Path from 'path';

/**
 * raziloMVCS Controller
 * Provides controller interface to backend
 */
export default class Notification
{
	constructor() {

	}

	/**
	 * index()
	 * @param Request req The request object
	 * @param Response res The response object
	 * @param Next next Call next() if you want to run route group middlware after
	 */
	index(req, res, next) {
		res.json({'status': 'success', 'message': 'Notification index...'});
	}
}
