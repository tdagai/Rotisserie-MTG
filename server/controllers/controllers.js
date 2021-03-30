const axios = require('axios');
const URL = 'https://api.scryfall.com';

const fetchCardsByName = async (req, res) => {
  const { term } = req.query;
  try {
    const searchResults = await axios.get(`${URL}/cards/search?q="${term}"`);
    const formattedCards = searchResults.data.data.reduce((acc, card) => {
      const { name, legalities } = card;
      if (legalities.vintage !== "legal" && legalities.vintage !== "restricted") {
        return acc;
      }
      if (!acc[name]) {
        acc[name] = {
          name,
          small: card.image_uris
            ? card.image_uris.small
            : card.card_faces[0].image_uris.small,
          normal: card.image_uris
            ? card.image_uris.normal
            : card.card_faces[0].image_uris.normal,
        };
      }
      return acc;
    }, {});
    res.status(200).send(Object.values(formattedCards).slice(0, 8));
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  fetchCardsByName,
};