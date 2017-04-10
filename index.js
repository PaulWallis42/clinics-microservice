const express = require('express');
const routes = require('./routes/api');

const app = express();

app.use(routes);

app.listen(process.env.port || 3000, function(){
  console.log('The server is listening on port 3000');
});
