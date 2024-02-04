const express = require('express');
const Flight = require('../modules/flightModule');

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

// In your controller file (e.g., flightsController.js)
exports.getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();

    res.status(200).json({
      status: 'success',
      data: {
        flights,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getOneFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      return res.status(404).json({
        status: 'fail',
        message: 'Flight not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        flight,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.updateFlight = async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedFlight) {
      return res.status(404).json({
        status: 'fail',
        message: 'Flight not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        flight: updatedFlight,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id);

    if (!deletedFlight) {
      return res.status(404).json({
        status: 'fail',
        message: 'Flight not found',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
