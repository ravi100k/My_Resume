const express = require('express');
const path = require('path')
var app = express();
app.use(express.static(path.join(__dirname, './')));

const PORT = process.env.PORT || 8080;
// app.listen(PORT)
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
    }
    else {
    next();
    }
});

app.listen(PORT, function () {
  console.log('Express server is up on port '+PORT);
});
