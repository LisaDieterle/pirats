const path = require('path');
const express = require('express');
const app = express();
const directoryPath = path.join(__dirname, "./public");
const port = process.env.PORT || 3000;

app.use(express.static(directoryPath));

// app.get('/', function (req, res) {
//
// });

app.listen(port, () => console.log('listening at 3000'));
