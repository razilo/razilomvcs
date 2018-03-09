import Model from '../Library/Model.mjs';

/**
 * raziloMVCS Model
 * Provides model abstraction to a data source, building on teh base model class
 */
export default class Order extends Model
{
	/**
	 * Inherited Properties
	 */
	// this.db 		// full knex access
	// this.table 	// knex table access, such as 'order'

	constructor() {
		super('order');
	}

	something() {
		return 111111;
	}
}
