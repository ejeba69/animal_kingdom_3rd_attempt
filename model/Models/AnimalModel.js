const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ['male', 'female'],
  },

  size: {
    type: String,
    enum: ['large', 'medium', 'small'],
  },
});

const AnimalClass = model('Animal', animalSchema);

module.exports = { AnimalClass };
