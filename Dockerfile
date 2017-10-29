FROM node:8.7-alpine

WORKDIR /srv

COPY . .
RUN npm i

RUN npm run lint
RUN npm test

RUN npm run all-build

RUN rm -rf webpack __tests__ node_modules dev

RUN chown -R node:node /srv
USER node

EXPOSE 8081 8081

CMD ["npm", "run", "server-run"]
