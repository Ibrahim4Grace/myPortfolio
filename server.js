if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const morgan = require('morgan');
const ejs = require('ejs');

const app = express();


 app.set('views', __dirname + '/views')

// TO CALL OUR EJS
app.set(`view engine`, `ejs`);

//TO BE ABLE TO ACCESS OUR STATIC FILES -- IMG, CSS, VIDEOS
app.use(express.static(`public`))
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



     //creating global variable for color changing
app.use(flash())
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hacker know about our stack



// ROUTES
app.use('/', require('./route/userRoute'));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));
