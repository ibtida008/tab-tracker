//Initialize Required Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//Initialize Express Module
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Api Routes
app.post('/register', (req, res) => {
  res.send({
    message: `Your user was registered!`,
    email: req.body.email,
    password:req.body.password
  });
});

//Start Server
app.listen(process.env.PORT || 8081);
