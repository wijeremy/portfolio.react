const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
  github: {
    type: String,
  },
  action: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;
