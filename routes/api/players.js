const { players } = require('../../controllers');
const { paths } = require('../../constants');

module.exports = (router) => {
  router.patch(paths.api.v1.PLAYERS_ID, players.update);
};
