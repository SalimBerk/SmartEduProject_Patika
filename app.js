const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('index sayfası');
});

const port = 3000;
app.listen(port, () => {
  console.log(`  ${port} nolu port çalıştı.`);
});
