FROM node:alpine

# Create app directory
RUN mkdir -p /app

# Add and Install
ADD ./config /app/config
ADD ./public /app/public
ADD ./src /app/src
COPY ./index.mjs /app/index.mjs
COPY ./package.json /app/package.json

WORKDIR /app

# Install Deps (only really need proxy polyfill but no bother leave package js as is for dev purposes!)
RUN npm install

EXPOSE 80

# Start
CMD ["npm", "start"]
