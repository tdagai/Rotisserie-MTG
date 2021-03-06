const axios = require('axios');
const nodemailer = require('nodemailer');
const { appendFile } = require('fs');
const SCYFALL_URL = 'https://api.scryfall.com';

//FF = First Face
//SF = Second Face
const fetchCardsByName = async (req, res) => {
  const { term } = req.query;
  try {
    const searchResults = await axios.get(`${SCYFALL_URL}/cards/search?q=legal%3Avintage+name%3D"${term}"`);
    const formattedCards = searchResults.data.data.reduce((acc, card) => {
      const { layout } = card;
      const { name, mana_cost, oracle_text, type_line, artist, flavor_text, power, toughness, loyalty, image_uris } = card;
      if (layout === 'meld') {
        return acc;
      }
      if (!acc[name]) {
        acc[name] = {
          searchName: name,
          layout,
          ff: {},
          sf: {},
        };
        if (layout === 'normal' || layout === 'saga' || layout === 'leveler') {
          acc[name].ff = {
            name,
            mana_cost,
            oracle_text,
            type_line,
            artist,
            flavor_text,
            power,
            toughness,
            loyalty,
            small: image_uris.small,
            normal: image_uris.normal,
          }
        } else if (layout === 'transform' || layout === 'modal_dfc') {
          const firstFace = card.card_faces[0];
          const secondFace = card.card_faces[1];
          acc[name].ff = {
            name: firstFace.name,
            mana_cost: firstFace.mana_cost,
            oracle_text: firstFace.oracle_text,
            type_line: firstFace.type_line,
            artist: firstFace.artist,
            flavor_text: firstFace.flavor_text,
            power: firstFace.power,
            toughness: firstFace.toughness,
            loyalty: firstFace.loyalty,
            small: firstFace.image_uris.small,
            normal: firstFace.image_uris.normal,
          }
          acc[name].sf = {
            name: secondFace.name,
            mana_cost: secondFace.mana_cost,
            oracle_text: secondFace.oracle_text,
            type_line: secondFace.type_line,
            artist: secondFace.artist,
            flavor_text: secondFace.flavor_text,
            power: secondFace.power,
            toughness: secondFace.toughness,
            loyalty: secondFace.loyalty,
            small: secondFace.image_uris.small,
            normal: secondFace.image_uris.normal,
          }
        }
        if (layout === 'split' || layout === 'flip' || layout === 'adventure') {
          const firstFace = card.card_faces[0];
          const secondFace = card.card_faces[1];
          acc[name].keywords = card.keywords;
          acc[name].ff = {
            name: firstFace.name,
            mana_cost: firstFace.mana_cost,
            oracle_text: firstFace.oracle_text,
            type_line: firstFace.type_line,
            power: firstFace.power,
            toughness: firstFace.toughness,
            artist: firstFace.artist,
            small: image_uris.small,
            normal: image_uris.normal,
          }
          acc[name].sf = {
            name: secondFace.name,
            mana_cost: secondFace.mana_cost,
            oracle_text: secondFace.oracle_text,
            type_line: secondFace.type_line,
            power: secondFace.power,
            toughness: secondFace.toughness,
            artist: secondFace.artist,
          }
        }
      }
      return acc;
    }, {});
    res.status(200).send(Object.values(formattedCards).slice(0, 8));
  } catch (e) {
    res.status(404).send(e);
  }
};

const validateSymbols = (str) => {
  return (
    str === '{PW}' ||
    str === '{CHAOS}' ||
    str === '{A}' ||
    str === '{Y}' ||
    str === '{Z}' ||
    str === '{??}' ||
    str === '{14}' ||
    str === '{17}' ||
    str === '{18}' ||
    str === '{19}' ||
    str === '{20}' ||
    str === '{100}' ||
    str === '{1000000}' ||
    str === '{???}' ||
    str === '{P}' ||
    str === '{HW}' ||
    str === '{HR}'
  );
}

const fetchSymbols = async () => {
  try {
    const symbols = await axios.get(`${SCYFALL_URL}/symbology`);
    const formattedSymbols = symbols.data.data.reduce((acc, symbol) => {
      if (!validateSymbols(symbol.symbol)) {
        acc[symbol.symbol] = symbol['svg_uri'];
      }
      return acc;
    }, {});
    return formattedSymbols;
  } catch {
    console.log('oopsie')
  }
};

const _verifyEmail = (email) => {
  const validEmailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validEmailTest.test(email);
}

const _addEmailToList = (email) => {
  appendFile('newsletter_email_list.txt', email, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    console.log('email written to file successfuly');
  });
}

let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'ec7c573e6e5e93',
    pass: 'ba22d1ee643064'
  }
});

const _sendThankYouEmail = (email) => {
  const message = {
    from: 'support@rotisserie-mtg.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Thank You For Signing Up For The Rotisserie MTG Mailing List!', // Subject line
    text: 'Thank you for subscribing to the mailing list of Rotisserie MTG!\nWhenever new updates come to the website, you will be the first to know about them!\n\nIf you\'d like to find more people to draft with, you can do so by joining our moderated Discord community here: https://discord.gg/ZE6pgh65r4' // Plain text body
  };

  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
}

const handleNewEmail = (req, res) => {
  const { email } = req.body;
  let resMsg = '';
  let resStat = 0;
  if (_verifyEmail(email)) {
    console.log('THIS IS A VALID EMAIL');
    try {
      _addEmailToList(email + '\n');
      _sendThankYouEmail();
      resMsg = 'Your email was successully added to the mailing list!'
      resStat = 201;
    } catch {
      resMsg = 'There was an issue adding your email to our system.'
      resStat = 500;
    }
  } else {
    console.log('THIS DOES NOT PASS THE EMAIL VALIDATION TEST');
    resMsg = 'This is not a valid email format. Please try again';
    resStat = 400;
  }
  res.status(resStat).send(resMsg);
}

module.exports = {
  fetchCardsByName,
  fetchSymbols,
  handleNewEmail,
};