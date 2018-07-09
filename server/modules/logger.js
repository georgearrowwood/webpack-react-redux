import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({ colorize: true }),
  ],
});

export default logger;
