const Course = require('../models/Course');
const { mongooseToObject } = require('../../unti/mongo');

class CoursesController {
    //([GET] courses/:slug)
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('courses/show', {
                    courses: mongooseToObject(courses)
                })
            })
            .catch(next);
    }

    //([GET] courses/create)
    create(req, res, next) {
        res.render('courses/create');
    }

    //([POST] courses/store)
    store(req, res, next) {
        req.body.img = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hprT5rIeJebP41R-BFIyeA5fByT27CDX7g&usqp=CAU`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect(`/me/stored/courses`))
            .catch(next);
    }
    //([edit] courses/store)
    edit(req, res, next) {
        Course.findById(req.params._id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course),
            }))
            .catch(next)
    }
    //([PUT] courses/id)
    update(req, res, next) {
        Course.updateOne({ _id: req.params._id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //([DELETE] courses/id)
    delete(req, res, next) {
        Course.delete({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    deleteforce(req, res, next) {
        Course.deleteOne({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //([DELETE] courses/id)
    restore(req, res, next) {
        Course.restore({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CoursesController();
