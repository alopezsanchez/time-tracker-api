FROM node:14.17.0-alpine

ENV NODE_ENV=docker

COPY . /app
WORKDIR /app

RUN rm package-lock.json
RUN npm install

ENTRYPOINT ["npm", "start"]
