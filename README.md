# Razilo MVCS

A simple no frills web based backend application stack built on Node, Express, log4js, mysql/knex and using a structured MVC layout.

The aim here is to create a node based alternative to something like slim (which i love alot), why? well why not!

All done in nice ES6 and using latest version of Node with Import loading (experimental)... not a babel in sight!

## Installation

Ermmmm, `docker-compose up -d`

## Usage

I would use a load balancer, traefik is a good one, fire it up, add the lables to your docker compose file and your good to go.

## Building Your Application

I like slim, and this is closely modelled around how I structure slim. You can have routes, point to controllers, have middleware (even on a per route basis) and can structure a nice API using this.

Want to serve your UI too so you dont need to mess around with CORS (which is pretty easy anyway, just add a cors middleware), but if you do wnat to, you can serve static locations, serve views (no templating in views, why would you, use a JS databinding template tool).

Why did I create this, well to be honest, I think it's finally time to start thinking about life after PHP.... and this could be served from serverless tech (hmmmmmm AWS Lambda maybe) so it could be cheaper and easier to scale.

This is the first iteration.... be patient.
