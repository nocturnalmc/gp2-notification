require('dotenv').config();
const express = require('express');
const app = express();

const notification = require('./routes-controllers/notification');

app.use('/gp2-notification', notification);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(
      port,
      console.log(`Server gp2-notification is listening at port: ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
