const express = require('express');
const router = express.Router();

const {
  myPortfolio,
  contactPost,
  projectDeatils,
  estateDetails,
  logisticDetails,
  ecommerceDetails,
  carRentalDetails,
  homeworkDetails,
} = require('../controller/userController');

router.get('/', myPortfolio);
router.post('/contactPost', contactPost);
router.get('/auto-Rentals', projectDeatils);
router.get('/estateDetails', estateDetails);
router.get('/logisticDetails', logisticDetails);
router.get('/ecommerceDetails', ecommerceDetails);
router.get('/carRentalDeatails', carRentalDetails);
router.get('/homeworkDetails', homeworkDetails);
module.exports = router;
