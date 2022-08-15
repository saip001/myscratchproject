const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT || 3000);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../scratch-starter-project/public/index.html'));
});
const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});