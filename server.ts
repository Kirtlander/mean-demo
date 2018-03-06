import * as express from 'express';
import {join} from 'path';
import {readFileSync} from 'fs';

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main.bundle');

// app.set('view engine', 'html');
// app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints
app.get('/api/hello/*', (req, res) => {
  return res.send('Hello world!!');
 });

// Example Express Rest API endpoints
  app.get('/api/**', (req, res) => { });

// Server static files from /browser
// app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
//   maxAge: '1y'
// }));

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
