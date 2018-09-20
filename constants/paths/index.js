const api = require('./api');

module.exports.api = api;

module.exports.build = (path, ...params) => {
  params.reverse();
  return path.replace(/(:\w+)/g, () => params.pop());
};