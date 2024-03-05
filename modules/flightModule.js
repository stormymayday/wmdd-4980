const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    default: '',
    required: [true, 'Please provide flightNumber field.'],
  },
  aircraftType: {
    type: String,
    default: '',
    required: [true, 'Please provide aircraftType field.'],
  },
  from: {
    type: String,
    default: '',
    required: [true, 'Please provide from field.'],
  },
  to: {
    type: String,
    default: '',
    required: [true, 'Please provide to field.'],
  },
  weather: {
    type: String,
    default: '',
    required: [true, 'Please provide weather field.'],
  },
  specialRequirements: [
    {
      PBN: {
        type: Boolean,
        default: false,
      },
      LVP: {
        type: Boolean,
        default: false,
      },
    },
  ],
  arriving: {
    type: Date,
    required: [true, 'Please provide in field in specialRequirements.'],
  },
  departure: {
    type: Date,
    required: [true, 'Please provide out field in specialRequirements.'],
  },
  crewMembers: [
    {
      member1: {
        type: String,
        default: '',
      },
      member2: {
        type: String,
        default: '',
      },
      member3: {
        type: String,
        default: '',
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
