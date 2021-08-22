const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');



const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  img: { type: String, maxLength: 255 },
  lever: { type: String, maxLength: 20 },
  slug: { type: String, slug: 'name', unique: true },
}, {
  timestamps: true,
});


Course.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);