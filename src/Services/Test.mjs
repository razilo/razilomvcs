import Service from '../Library/Service.mjs';
import crypto from 'crypto';
// import sleep from 'sleep';

/**
 * raziloMVCS Service
 * Provides service for the application stack to use to perform a set of actions
 */
export default class Test extends Service
{
	constructor() {
		super();

		this.hello = 'hello';
	}

	something() {


		var test = '';
		for (var i = 0; i < 10000000; i++) {
			test += '.';
		}

		var test = '';
		for (var i = 0; i < 1000; i++) {
			test += '.';
		}

        // var numChars = Math.rou?5000 + (Math.random() * 5000));
        // var randChars = crypto.randomBytes(numChars).toString('hex');
        // res.send(randChars);
		return test;
	}
}
