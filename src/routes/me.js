const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// newsController.index
router.get('/stored/courses', meController.stored);
router.get('/trash/courses', meController.trash);


module.exports = router;
