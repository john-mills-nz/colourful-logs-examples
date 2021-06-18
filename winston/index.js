const winston = require('winston');
const { format } = winston;

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: "silly",
            format: format.combine(
                format.colorize(),
                format.timestamp(),
                format.printf(({ level, message, timestamp }) => `${timestamp} ${level}   \t${message}`)
            )
        })
    ]
});

logger.silly("Example silly message");
logger.debug("Example debug message");
logger.verbose("Example verbose message");
logger.http("Example http message");
logger.info("Example info message");
logger.warn("Example warn message");
logger.error("Example error message");
