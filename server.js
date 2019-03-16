const express = require('express');
const path = require('path');
const compression = require('compression');

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '127.0.0.1';
const DIST_FOLDER = path.join(process.cwd(), 'dist');
const APP_NAME = 'portfolio';

const app = express();

// Enable Gzip compressions
app.use(compression());

// Static Assets
app.get(
  '*.*',
  express.static(path.join(DIST_FOLDER, APP_NAME), {
    maxAge: '1y'
  })
);

app.use('/', express.static(path.join(DIST_FOLDER, APP_NAME))); // myApp will be the same folder name.
app.get('/', (req, res) =>
  res.sendFile(path.resolve(path.join(DIST_FOLDER, APP_NAME, 'index.html')))
);


app.listen(PORT, HOST, () => {
  console.log(`Node Express server listening on http://${HOST}:${PORT}`);
});
