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
    available: {
      type: String,
      enum: ['available', 'Unavailable', 'PTO'],
      default: 'Unavailable',
    },
  },
  certifications: {
    type: [String],
    default: [],
  },
});

// Middleware to check flight hours before saving
crewMemberSchema.pre('save', function (next) {
  const totalHoursLimit = 1500;
  const monthlyHoursLimit = 100;

  if (
    this.flightHours.total > totalHoursLimit ||
    this.flightHours.thisMonth > monthlyHoursLimit
  ) {
    this.flightHours.available = 'Unavailable';
  }

  next();
});

const Crew = mongoose.model('Crew', crewMemberSchema);

module.exports = Crew;
