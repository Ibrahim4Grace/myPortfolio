const express = require('express');
const router = express.Router();


const { myPortfolio, contactPost} = require('../controller/userController');

router.get('/', myPortfolio);
router.post('/contactPost', contactPost);


module.exports = router;
