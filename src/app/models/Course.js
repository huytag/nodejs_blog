const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const CourseSchema = new Schema({
  _id: { type: Number },
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  img: { type: String, maxLength: 255 },
  lever: { type: String, maxLength: 20 },
  slug: { type: String, slug: 'name', unique: true },
}, {
  timestamps: true,
  _id: false,
});

// Custom query helper
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty('_sort')) {
    const isValidtype = ['asc', 'desc'].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidtype ? req.query.type : 'desc',
    });
  }
  return this;
}

CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongoose_delete, {
  
  deletedAt: true,
  overrideMethods: 'all',
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', CourseSchema);