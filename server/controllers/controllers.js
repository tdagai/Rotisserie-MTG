const axios = require('axios');
const URL = 'https://api.scryfall.com';

const fetchCardsByName = async (req, res) => {
  const { term } = req.query;
  try {
    const searchResults = await axios.get(`${URL}/cards/search?q="${term}"`);
    const formattedCards = searchResults.data.data.reduce((acc, card) => {
      const { name, legalities, mana_cost, oracle_text, type_line, artist, flavor_text, power, toughness, loyalty } = card;
      if (legalities.vintage !== "legal" && legalities.vintage !== "restricted") {
        return acc;
      }
      if (!acc[name]) {
        acc[name] = {
          name,
          mana_cost,
          oracle_text,
          type_line,
          artist,
          flavor_text,
          power,
          toughness,
          loyalty,
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

const fetchSymbols = async () => {
  try {
    const symbols = await axios.get(`${URL}/symbology`);
    const formattedSymbols = symbols.data.data.reduce((acc, symbol) => {
      acc[symbol.symbol] = symbol['svg_uri'];
      return acc;
    }, {});
    return formattedSymbols;
  } catch {
    console.log('oopsie')
  }
};

const replaceStandinWithSymbol = (req, res, symbols) => {
  const parsedSymbs = JSON.parse(req.params.parsedSymbs);
  const replaced = [];
  for (let i = 0; i < parsedSymbs.length; i++) {
    replaced.push(symbols[parsedSymbs[i]]);
  }
  res.status(200).send(replaced);
}

module.exports = {
  fetchCardsByName,
  fetchSymbols,
  replaceStandinWithSymbol,
};