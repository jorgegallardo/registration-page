var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('*', function(req, res) {
  return res.redirect('/#!' + req.originalUrl);
});

app.listen(3000, function() {
  console.log('Listening on port 3000.');
});