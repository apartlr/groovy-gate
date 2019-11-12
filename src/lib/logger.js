const log = require('bristol');
const palin = require('palin');

log.addTarget('console').withFormatter(palin, {
    rootFolderName: 'groovy-gate',
});

module.exports = log;
