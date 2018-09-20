const domain = process.env.DOMAIN || 'localhost';
const port = process.env.PORT || 5000;
const protocol = process.env.PROTOCOL || 'https://';

module.exports.domain = domain;
module.exports.port = port;
module.exports.protocol = protocol;

module.exports.serverUrl = serverUrl = process.env.SERVER_URL || `${protocol}${domain}${port ? `:${port}` : ''}`;