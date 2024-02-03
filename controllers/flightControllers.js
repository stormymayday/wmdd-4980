const express = require('express');
const Flight = require('../modules/flightModule');

exports.getFlights = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Get request to the main page',
  });
};
exports.createFLight = async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newFlight,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getOneFlight = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};

exports.updateFlight = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
exports.deleteFlight = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
