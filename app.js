const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Jenkins!');
});

if (require.main === module) {
  app.listen(4000, () => {
    console.log(`App listening at http://localhost:4000`);
  });
}

module.exports = app;
