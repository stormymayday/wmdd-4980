const express = require('express');

exports.getMainPage = (req, res) => {
  res.status(200).json({
    status: 'nice',
    message: 'nice',
  });
};
exports.postMainPage = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
