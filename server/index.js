const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const controllers = require('./controllers/controllers.js');
const io = require('socket.io')(http);

const PORT = 3000;
const users = {};
let allDrafted = [];
let symbols = null;

const receiveSymbols = (req, res, next) => {
  if (symbols === null) {
    controllers.fetchSymbols()
    .then(s => {
      symbols = s;
      io.emit('symbols', symbols);
      next();
    });
  } else {
    next();
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(express.static('./client/dist/'));
app.use(receiveSymbols);

io.on('connection', (socket) => {
  console.log('new user connected');
  users[socket.id] = [];
  console.log(users);
  io.emit('new connection', { users, allDrafted });
  if (symbols !== null) {
    io.emit('symbols', symbols);
  }

  socket.on('new draft list', ({ socketID, card }) => {
    if (card?.name) {
      users[socketID]?.push(card);
      allDrafted.push(card.name);
      socket.broadcast.emit('new card drafted', { users, allDrafted, senderID: socketID, newCard: card });
    }
  });

  socket.on('disconnecting', () => {
    console.log(`user ${socket.id} disconnected`);
    users[socket.id]?.forEach((card) => {
      allDrafted = allDrafted.filter((cardName) => cardName !== card.name);
    });
    delete users[socket.id];
    io.emit('user-disconnected', { allDrafted });
  });
});

app.get('/search', (req, res) => controllers.fetchCardsByName(req, res));
app.get('/symbols/:parsedSymbs', (req, res) => controllers.replaceStandinWithSymbol(req, res, symbols));

http.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));