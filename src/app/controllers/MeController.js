const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../unti/mongo');

class MeController {
    //([GET] courses/create)
    stored(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
    trash(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }

}
module.exports = new MeController();
