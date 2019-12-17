
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bugSchema = new Schema({
  project: { type: String, },
  bugdescription: { type: String, required: true },
  datestart: { type: Date, required: true },
  dateend: { type: Date, required: true },
}, {
  timestamps: true,
});

const bug = mongoose.model('bug', bugSchema);

module.exports = bug;