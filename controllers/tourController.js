const express = require('express');
const fs = require('fs');

// READ TOURS File
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.checkId = (req, res, next, vall) => {
  console.log(`Tour id is ${vall}`);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'error',
      data: {
        message: 'Tour not found',
      },
    });
  }
  next();
};
exports.checkReqData = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'error',
      message: 'Data wasnt send from the frontend',
    });
  }
  next();
};
// FUNCTIONS

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    time: req.requestTime,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        results: tours.length,
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updatedTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: 'updated tour here',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
