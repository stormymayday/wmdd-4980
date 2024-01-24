const express = require('express');
const User = require('../modules/userModule');

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This is not implemented y111et',
  });
};
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
exports.getUser = (req, res) => {
  res.status(400).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
