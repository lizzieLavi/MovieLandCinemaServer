const express = require('express');
var cors = require('cors');
require('dotenv').config()
const usersRouter = require('./routers/usersrouter');
const LogInRouter = require('./routers/loginrouter');
const moviesRouter = require('./routers/moviesrouter');
const subscriptionsRouter = require('./routers/subscriptionsrouter');
const MembersRouter = require('./routers/membersrouter');
const PermissionsRouter = require('./routers/permissionsrouter');

var app = express();

app.use(cors());

require('./configs/database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/LogIn', LogInRouter);
app.use('/api/Subscriptions', subscriptionsRouter);
app.use('/api/Members', MembersRouter);
app.use('/api/Permissions', PermissionsRouter);




let port = process.env.PORT || 3000;
app.listen(port);