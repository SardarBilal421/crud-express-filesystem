const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have name'],
    unique: true,
  },
  duration: Number,
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'a tuor must have price'],
  },
});

const Tour = mongoose.model('tours', tourSchema);

module.exports = Tour;
