const { Schema, model } = require('mongoose');

const Genders = Object.freeze({
  Male: 'male',
  Female: 'female',
});

const Sizes = Oject.freeze({
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
});

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: Object.values(Genders),
  },

  size: {
    type: String,
    enum: Object.values(Sizes),
  },
});

const AnimalClass = model('Animal', animalSchema);

module.exports = { AnimalClass };
