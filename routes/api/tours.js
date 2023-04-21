const express = require('express');
const router = express.Router();
const toursCtrl = require('../../controllers/api/tour');

// All paths start with '/api/tours'

// POST /api/tours (create a user - sign up)
router.get('/', toursCtrl.index);
router.post('/', toursCtrl.create);
router.delete('/:id', toursCtrl.deleteTour);
router.get('/:id', toursCtrl.getTour);
router.put('/:id', toursCtrl.updateTour);

module.exports = router;