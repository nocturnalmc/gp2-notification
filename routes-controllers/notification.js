const express = require('express');
const router = express.Router();

const notification = async (req, res) => {
  const notificationString = 'this is a notification string';

  res.status(200).json({ msg: notificationString });
};

router.route('/').get(notification);

module.exports = router;
