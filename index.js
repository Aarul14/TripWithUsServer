const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', require('./Routes/sort'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app;
