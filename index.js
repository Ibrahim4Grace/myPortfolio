if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const nodemon = require('nodemon');
const ejs = require('ejs');

const app = express();

// Set no-cache headers middleware
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.header('Pragma', 'no-cache');
  next();
});

// const trustedOrigins = [process.env.BASE_URL];
// app.use(cors({
//   origin: process.env.NODE_ENV === 'production' ? trustedOrigins : '*',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
// }));

app.set('views', __dirname + '/views');

// TO CALL OUR EJS
app.set(`view engine`, `ejs`);

//TO BE ABLE TO ACCESS OUR STATIC FILES -- IMG, CSS, VIDEOS
// app.use(express.static(`public`))
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  // Use a placeholder store for production (replace it with a suitable store)
  const MemoryStore = require('memorystore')(session);
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      store: new MemoryStore({
        checkPeriod: 86400000, // Prune expired entries every 24h
      }),
    })
  );
} else {
  // Use MemoryStore for development
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
}

app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hacker know about our stack

// ROUTES
app.use('/', require('./route/userRoute'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
