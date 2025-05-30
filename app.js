const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World from Jenkins!');
});

let server;

if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = { app, server };
