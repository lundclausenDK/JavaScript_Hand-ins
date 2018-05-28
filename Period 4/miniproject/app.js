require("./data_rest/dbSetup");
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const login = require('./routes/login');
const logout = require('./routes/logout');
const dashboard = require('./routes/dashboard');
const blog = require('./routes/blog');

const userFacade = require('./facade/userFacade');
const loginFacade = require('./facade/loginFacade');

const graphqlHTTP = require("express-graphql");
const {schema} = require("./data_graphql/schema");

const cors = require('cors');

const app = express();

// CORS setup
app.use(cors());
app.options('*', cors());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('/dashboard', dashboard);
app.use('/blog', blog);

// GraphQL
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: false,
}));

// REST API
// Users
app.get("/api/users/", userFacade.getAllUsers);
app.get('/api/users/:user_name', userFacade.findByUserName);

app.post('/api/users/', function(req, res) {
    userFacade.addUser(req.body);
});

// Login
//app.get('/api/login/', loginFacade.getAllLogins);
//app.post('/api/login/', loginFacade.login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});





app.listen(3030, function() {
    console.log("Ready");
});


module.exports = app;
