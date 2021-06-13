const bunyan = require("bunyan");

const logger = bunyan.createLogger({
    name: "myapp",
    level: "trace"
});

logger.trace("Example trace message");
logger.debug("Example debug message");
logger.info("Example info message");
logger.warn("Example warn message");
logger.error("Example error message");