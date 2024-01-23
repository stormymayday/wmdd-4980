const express = require('express');
const {
  getAllTours,
  createTour,
  updatedTour,
  deleteTour,
  getTour,
  checkId,
  checkReqData,
} = require('../controllers/tourController');

const router = express.Router();
router.param('id', checkId);

// ROUTS

router.route('/').get(getAllTours).post(checkReqData, createTour);
router.route('/:id').patch(updatedTour).delete(deleteTour).get(getTour);

// EXPORT AS A MIDDLEWARE
module.exports = router;
