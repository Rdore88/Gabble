const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const expressSession = require('express-session');
const expressValidator = require('express-validator');
const homeRouter = require('./routes/home.js');
const likeRouter = require('./routes/like.js');
const messageRouter = require('./routes/message.js');
const userRouter = require('./routes/user.js');


app.engine('mustache', mustacheExpress());
app.set('views', './public/views');
app.set('view engine', 'mustache');

app.use(bodyParser());
app.use(express.static('public'));
app.use(expressValidator());

app.use('/user', userRouter);
app.use('/message', messageRouter);
app.use('/like', likeRouter);
app.use('/', homeRouter);


app.listen(3000, function(){
  console.log('up and running');
})
