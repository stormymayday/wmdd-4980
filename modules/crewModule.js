const mongoose = require('mongoose');

const crewMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    enum: ['pilot', 'second_pilot', 'flight_attendant'],
    required: true,
  },
  flightHours: {
    total: {
      type: Number,
      default: 0,
    },
    thisMonth: {
      type: Number,
      default: 0,
    },
  },
  certifications: {
    type: [String],
    default: [],
  },
});

const Crew = mongoose.model('Crew', crewMemberSchema);

module.exports = Crew;
