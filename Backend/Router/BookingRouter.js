const express = require('express');
const router = express.Router();
const booking = require('../Controller/BookingController');
const auth = require('../Middleware/Auth');

router.post('/bookings', auth, booking.bookingData)

module.exports = router