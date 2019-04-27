const nr = require('newrelic');
const express = require('express');
const apiRoute = require('../routes/api');
const path = require('path');
const PORT = 3001;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, (err) => {
  console.log(`Server listening on port ${PORT}`)
});
