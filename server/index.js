const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const controllers = require('./controllers/controllers.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(express.static('./client/dist/'));

app.get('/search', (req, res) => controllers.fetchCardsByName(req, res));

http.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));