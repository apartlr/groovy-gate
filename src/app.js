const Koa = require('koa');

class App extends Koa {
    constructor(...params) {
        super(...params);

        this.servers = [];

        this._configureMiddlewares();
        this._configureRoutes();
    }

    _configureMiddlewares() {}

    _configureRoutes() {}

    listen(...args) {
        const server = super.listen(...args);
        this.servers.push(server);
        return server;
    }

    async terminate() {
        for (const server of this.servers) {
            server.close();
        }
    }
}

module.exports = App;
