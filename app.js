const e = require('express');
const express = require('express');
const TourRouter = require('./Routers/TourRouter');
const UserRouter = require('./Routers/UserRouter');
const app = express();
app.use(express.json());

// app.post('/api/v1/tours', createNewTours);
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getToursByID);
// app.patch('/api/v1/tours/:id', updateTours);
// app.delete('/api/v1/tours/:id', deleteTours);

//MIDDLEWARE

app.use('/api/v1/tours', TourRouter);
app.use('/api/v1/users', UserRouter);

module.exports = app;
