const express = require('express');
const router = express.Router();

const { myPortfolio, contactPost,projectDeatils,estateDetails} = require('../controller/userController');

router.get('/', myPortfolio);
router.post('/contactPost', contactPost);
router.get('/details', projectDeatils);
router.get('/estateDetails', estateDetails);
module.exports = router;
