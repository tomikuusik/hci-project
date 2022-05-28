FROM node:16-alpine as build-stage

WORKDIR /app

ENV PATH="node_modules/.bin:$PATH"
ENV NODE_ENV=development

RUN npm install -g nodemon

COPY ["package.json", "package-lock.json", "./"]

RUN npm i && npm cache clean --force