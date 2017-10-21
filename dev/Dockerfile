FROM node:8.7-alpine

WORKDIR /srv
COPY . .

RUN npm i -g nodemon
RUN apk add --no-cache curl

EXPOSE 8080 8080
EXPOSE 8888 8888

CMD npm i && npm run server-watch
