const express = require('express');
const router = express.Router();
const tourController = require('../Controller/tourController');

router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createNewTours);

router
  .route('/:id')
  .get(tourController.getToursByID)
  .patch(tourController.updateTours)
  .delete(tourController.deleteTours);

module.exports = router;
