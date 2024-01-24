const express = require('express');

exports.getMainPage = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Get request to the main page',
  });
};
exports.postMainPage = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
