import Knex from 'knex';

/**
 * raziloMVCS Model Base Class
 * Provides base functionality to model
 */
export default class Model
{
	constructor(tableName, client, host, user, password, schema, poolMin, poolMax, timeout) {
		// detect table name and connection details, or fall back to env vars for no details (single DB)
		if (tableName === undefined) throw 'Table name missing from super() call in model.';
		if (client === undefined) client = process.env.MYSQL_CLIENT;
		if (host === undefined) host = process.env.MYSQL_HOST;
		if (user === undefined) user = process.env.MYSQL_USER;
		if (password === undefined) password = process.env.MYSQL_PASSWORD;
		if (schema === undefined) schema = process.env.MYSQL_SCHEMA;
		if (poolMin === undefined) poolMin = process.env.MYSQL_POOL_MIN;
		if (poolMax === undefined) poolMax = process.env.MYSQL_POOL_MAX;
		if (timeout === undefined) timeout = process.env.MYSQL_TIMEOUT;

		this.db = new Knex({
			client: client,
			connection: {
				host     : host,
				user     : user,
				password : password,
				database : schema
			},
			pool: {
				min: parseInt(poolMin),
				max: parseInt(poolMax)
			},
			acquireConnectionTimeout: timeout
		});

		this.table = this.db(tableName);
	}

	// NOTE: Need to write basic functions here such as fetch, fetchAll, that kind of thing
	// Then need to look at implementing .save() on a new object, add properties to model files etc.
}
