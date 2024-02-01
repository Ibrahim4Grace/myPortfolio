const express = require('express');
const router = express.Router();

const { myPortfolio, contactPost,projectDeatils} = require('../controller/userController');

router.get('/', myPortfolio);
router.post('/contactPost', contactPost);
router.get('/details', projectDeatils);

module.exports = router;
