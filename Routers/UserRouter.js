const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createNewUser);

router
  .route('/:id')
  .get(userController.getUserByID)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
