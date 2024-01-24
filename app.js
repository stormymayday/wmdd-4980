const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const mainPageRouter = require('./routes/mainPageRoutes');

const app = express();

// 1) MIDDLEWARES

app.use(express.json());
app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log('Hello from the middle ware😁');
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

app.use('/', mainPageRouter);
app.use('/users', userRouter);

module.exports = app;
