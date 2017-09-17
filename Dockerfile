FROM node:8.2-alpine

WORKDIR /srv

RUN chown -R node:node /srv
USER node

# Add any unwanted files to .dockerignore
ADD . .

EXPOSE 3000
CMD ["yarn", "run", "server-run"]
