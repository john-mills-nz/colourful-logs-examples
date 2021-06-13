const pino = require("pino");

const pinoLogger = pino({
    level: "trace",
    prettyPrint: {
        suppressFlushSyncWarning: true
    },
    timestamp: pino.stdTimeFunctions.isoTime
});

pinoLogger.trace("Example trace message");
pinoLogger.debug("Example debug message");
pinoLogger.info("Example info message");
pinoLogger.warn("Example warn message");
pinoLogger.error("Example error message");
pinoLogger.fatal("Example fatal message");