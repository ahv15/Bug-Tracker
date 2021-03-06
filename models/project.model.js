const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const project = mongoose.model('project', projectSchema);

module.exports = project;