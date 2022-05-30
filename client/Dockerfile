FROM node:16-alpine as build-stage

WORKDIR /app

ENV PATH="node_modules/.bin:$PATH"

RUN npm install -g nodemon

COPY ["package.json", "package-lock.json", "./"]

RUN npm i && npm cache clean --force
