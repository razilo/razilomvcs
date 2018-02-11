import Path from 'path';

/**
 * raziloMVCS Controller
 * Provides controller interface to backend
 */
export default class Birds
{
	constructor() {

	}

	index(req, res, next) {
		res.send('Birds home page')
		console.log('Birds home page');
		next();
	}

	about(req, res, next) {
		res.send('About birds')
		console.log('About birds');
		next();
	}

	boom(req, res, next) {
		res.sendFile(Path.resolve() + '/src/Views/boom.html');
	}
}
