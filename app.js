const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const mainPageRouter = require('./routes/mainPageRoutes');
const createFlight = require('./routes/createFlightRoutes');
const crewRouter = require('./routes/crewRoutes');

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

app.use('/api/v1/test', mainPageRouter);
app.use('/api/v1/flights', createFlight);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/crew', crewRouter);

module.exports = app;
