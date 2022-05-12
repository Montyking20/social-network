const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Mongo connect and start web server 
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`social-network API running on port ${PORT}!`);
  });
});
