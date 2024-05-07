// middleware/auth.js

const jwt = require('jsonwebtoken');
const { secretKey } = require('../utils/constants');

module.exports = (req, res, next) => {
  // Get token from header
  const token_data = req.header('x-auth-token');
  const token = token_data.split(
    " ",
  )[1];

  console.log(token)

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, secretKey);

    // Add user to request object
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
