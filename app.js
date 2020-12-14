const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const http = require('http');
const cors = require('cors');
const { routes } = require('./routes');

// connection to mongoDB
mongoose.connect(config.get('mongoDBUrl'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// configure express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
routes.forEach((item) => {
  app.use(`/api/${item}`, require(`./routes/${item}`));
});

// init app
const PORT = config.get('port');
http.createServer({}, app).listen(PORT);

console.log(`Server started on port ${PORT}`);
