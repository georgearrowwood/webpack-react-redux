FROM node:8.2-alpine

WORKDIR /srv
COPY . .

RUN npm i -g nodemon
RUN apk add --no-cache curl

EXPOSE 8888 8080

CMD npm i && npm run server-watch
