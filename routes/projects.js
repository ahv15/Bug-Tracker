const router = require('express').Router();
let project = require('../models/project.model');

router.route('/').get((req, res) => {
  project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const projectname = req.body.projectname;

  const newproject = new project({projectname});

  newproject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;