# Razilo MVCS

A simple no frills web based backend application stack built on Node, Express, log4js, mysql/knex and using a structured MVC layout.

The aim here is to create a node based alternative to something like slim (which i love alot), why? well why not!

All done in nice ES6 and using latest version of Node with Import loading (experimental)... not a babel in sight!

## Installation

Ermmmm, `docker-compose build`

## Rebuilding

Ermmmm, `docker-compose build`

## Running

Ermmmm, `docker-compose up -d`

## Developing

Well, it's an app, so any change needs a restart unless its a dynamically loaded file like serving a html file ot asset. So if you make changes in src, you will need to restart the server. You can either manually restart the docker container, but this is clunky, so a cleaner way is not to start the container normally, we should just run it is a single one shot using the npm dev script...

`docker-compose run [container name] npm run dev`

This will run the dev script, which uses nodemon, so a) it will allow you to still see console logs which is awesome for developing, and b) if you change any file in your project, only the express server is restart allowing your changes to be seen in your app.

This is much quicker than restarting docker and is pretty seemless, plus you can also see your debug console logs. Yay! Alternatively, you can stop/start your docker container, or just restart it for a blunt restart.

I like slim, and this is closely modelled around how I structure slim. You can have routes, point to controllers, have middleware (even on a per route basis) and can structure a nice API using this.

Want to serve your UI too so you dont need to mess around with CORS (which is pretty easy anyway, just add a cors middleware), but if you do wnat to, you can serve static locations, serve views (no templating in views, why would you, use a JS databinding template tool).

Why did I create this, well to be honest, I think it's finally time to start thinking about life after PHP.... and this could be served from serverless tech (hmmmmmm AWS Lambda maybe) so it could be cheaper and easier to scale.

This is the first iteration.... be patient.

## Adding Modules

Well this is node, so we should npm install, but don't do that, that will install them locally, lets build them in teh container so we dont have any deps locally.

`docker-compose run [container name] npm install --save xxx` to install to a container with docker compose...

`docker run [container_id] npm install --save xxx` to install to a container with using docker directly...

Ensure you have opened the permissions of your package.json file up so the container can map changes to your local copy from inside the docker container. Your container will need write access to change this file locally if you map your package file from local to container.

Other ways to get deps in via NPM would be to npm install them locally, saving changes to the file, check it's what you want, then delete the node_modules folder locally and re-build your docker image with the build command up top `docker-compose build`.

When you start the container again you will have the new deps installed in the container.

Why do we do this? Well we do not need deps locally, so we don't volumne map them, you can if you like, it's up to you.

## Usage

I would use a load balancer, traefik is a good one, fire it up, add the lables to your docker compose file and your good to go.

## Endpoints

1) <http://razilomvcs.docker.localhost>

2) <http://razilomvcs.docker.localhost/inventory>

3) <http://razilomvcs.docker.localhost/notification>

4) <http://razilomvcs.docker.localhost/order>

App middleware will be present on all urls and route middleware will be for specific route groups 
