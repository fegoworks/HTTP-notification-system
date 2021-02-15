/* eslint-disable indent */
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import env from 'dotenv';
import routes from './routes/index';
import { apiErrorHandler } from './helpers/errorHandler';

env.config();
const port = process.env.PORT || 5555;
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

// Routes here
app.use(routes);

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the Pub/Sub Application</h1>
  <h4>Please use PostMan to explore the APIs</h4>
  <p>For any more info please visit my <a href='https://github.com/fegoworks/HTTP-notification-system'>Github</a> page</P>
  <h4>Thanks  &#x1F600;</h4>`);
});

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'You have entered an incorrect route',
  });
});
app.use(apiErrorHandler);

app.listen(port, () => console.log(`Welcome, listening on ${port}`));

export default app;