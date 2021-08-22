const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

// newsController.index
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:_id/edit', coursesController.edit);
router.put('/:_id', coursesController.update);
router.get('/:slug', coursesController.show);

module.exports = router;
