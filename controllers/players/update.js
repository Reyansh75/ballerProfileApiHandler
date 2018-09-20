const axios = require('axios');

const { paths } = require('../../constants');

module.exports = async (req, res) => {
  try {
    const { headers, body, params } = req;

    const player = await axios({
      method: 'patch',
      url: paths.build(paths.api.v1.API_PLAYERS_ID, params.id),
      headers: { Authorization: headers.authorization },
      data: body
    });

    return res.sendStatus(200).end();
  } catch (error) {
    console.error(error);
  }
};