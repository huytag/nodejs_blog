const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../unti/mongo');


class MeController {
    //([GET] courses/create)
    stored(req, res, next) {
        Promise.all([
            Course.find({}).sortable(req), 
            Course.countDocumentsDeleted()]
            )
            .then(([courses, deleteCount]) =>
                res.render('me/stored', {
                    deleteCount,
                    courses: mutipleMongooseToObject(courses),
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
