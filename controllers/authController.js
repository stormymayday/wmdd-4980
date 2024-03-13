const User = require('../models/userModule');
const jwt = require('jsonwebtoken');

exports.singUp = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err,
    });
  }
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  //1) IF EMAIL EXISTS AND PASSWORD
  if (!email || !password) {
    res.status(400).json({
      status: 'error',
      message: 'Please provide an email and password',
    });
  }
  //2)USER EXISTS AND PASSWORD IS CORRECT
  // 3) IF OK SEND TOKEN BACK
};
