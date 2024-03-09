const mongoose = require('mongoose');

const crewMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    required: true,
  },
  role: {
    type: String,
    enum: ['pilot', 'second_pilot', 'flight_attendant'],
    required: true,
  },
  FlightNumber: {
    type: String,
    default: '',
    required: [true, 'Please provide FlightNumber field.'],
  },
  email: {
    type: String,
    required: [true, 'Must have a name!'],
    default: 'repiklleonid@gmail.com',
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
  likesEmails: {
    type: Boolean,
    default: true,
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
