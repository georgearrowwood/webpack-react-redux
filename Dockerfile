FROM node:8.7-alpine

WORKDIR /srv
RUN apk add --no-cache curl

RUN chown -R node:node /srv
USER node

COPY . .
RUN npm i
RUN npm run all-build

EXPOSE 8081 8081

CMD ["npm", "run", "server-run"]
