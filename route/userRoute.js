const express = require('express');
const router = express.Router();

const { myPortfolio, contactPost,projectDeatils,estateDetails,logisticDetails} = require('../controller/userController');

router.get('/', myPortfolio);
router.post('/contactPost', contactPost);
router.get('/details', projectDeatils);
router.get('/estateDetails', estateDetails);
router.get('/logisticDetails', logisticDetails);
module.exports = router;
