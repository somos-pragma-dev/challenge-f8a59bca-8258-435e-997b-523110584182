const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Email is required and must be valid'),
  check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
];

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};