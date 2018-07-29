const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hellow Form Server');
})

app.post('/enroll', function (req, res) {
  console.log(req.body);
  res.status(200).send({
    'message': 'Data recd'
  });
})

app.listen(function () {
  console.log('Server is listening');
})
