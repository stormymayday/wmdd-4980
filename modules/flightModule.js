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
      field1: {
        type: String,
        default: '',
        required: [true, 'Please provide field1 in specialRequirements.'],
      },
      field2: {
        type: Boolean,
        default: false,
        required: [true, 'Please provide field2 in specialRequirements.'],
      },
      in: {
        type: String,
        default: '0',
        required: [true, 'Please provide in field in specialRequirements.'],
      },
      out: {
        type: String,
        default: '0',
        required: [true, 'Please provide out field in specialRequirements.'],
      },
    },
  ],
  crewMembers: [
    {
      member1: {
        type: String,
        default: '',
        required: [true, 'Please provide member1 in crewMembers.'],
      },
      member2: {
        type: String,
        default: '',
        required: [true, 'Please provide member2 in crewMembers.'],
      },
      member3: {
        type: String,
        default: '',
        required: [true, 'Please provide member3 in crewMembers.'],
      },
    },
  ],
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
