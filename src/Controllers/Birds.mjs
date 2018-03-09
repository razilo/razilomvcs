import Path from 'path';
import OrderModel from '../Models/Order.mjs';

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
		var order = new OrderModel();

		order.table.select('*').limit('1').then((rows) => {
			res.send('About birds: ' + rows[0].created);
			console.log(rows);

			next();
		});
	}

	boom(req, res, next) {
		res.sendFile(Path.resolve() + '/src/Views/boom.html');
	}
}
