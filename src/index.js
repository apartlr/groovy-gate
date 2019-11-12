const App = require('./app');
const logger = require('./lib/logger');

const app = new App();

function handleError(err, ctx) {
    if (ctx == null) {
        logger.error({ err, event: 'error' }, 'Unhandled exception occured');
    }
}

async function terminate(signal) {
    try {
        await app.terminate();
    } finally {
        logger.info({ signal, event: 'terminate' }, 'App is terminated');
        process.kill(process.pid, signal);
    }
}

// Handle uncaught errors
app.on('error', handleError);

// Start server
if (!module.parent) {
    const server = app.listen(3000, () => {
        logger.info({ event: 'execute' }, 'API server listening on 3000');
    });
    server.on('error', handleError);

    ['unhandledRejection', 'uncaughtException'].map(error => process.on(error, handleError));

    ['SIGTERM', 'SIGINT', 'SIGUSR2'].map(signal => process.once(signal, () => terminate(signal)));
}

// Expose app
module.exports = app;
