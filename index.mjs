import Cluster from 'cluster';
import Os from 'os';
import Application from './src/Application.mjs';

// spawn clusters per env var or fall back to CPU's if not set
var amount = process.env.CLUSTER ? parseInt(process.env.CLUSTER) : Os.cpus().length;

// Code to run if we're in the master process
if (Cluster.isMaster) {
    // Create a worker for each CPU
    for (var i = 0; i < amount; i += 1) {
        Cluster.fork();
    }

    // Listen for dying workers
    Cluster.on('exit', function () {
        Cluster.fork();
    });
} else {
	let app = new Application();
	app.run(80);
}
