
const router = require('express').Router();
let bug = require('../models/bug.model');

router.route('/').get((req, res) => {
  bug.find()
    .then(bugs => res.json(bugs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const project = req.body.bug;
  const bugdescription = req.body.bugdescription;
  const datestart = Date.parse(req.body.datestart);
  const dateend = Date.parse(req.body.dateend);

  const newbug = new bug({
    project,
    bugdescription,
    datestart,
    dateend,
  });

  newbug.save()
  .then(() => res.json('Bug added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  bug.findById(req.params.id)
    .then(bug => res.json(bug))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  bug.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  bug.findById(req.params.id)
    .then(bug => {
      bug.project = req.body.project;
      bug.bugdescription = req.body.bugdescription;
      bug.datestart = Date.parse(req.body.datestart);
      bug.dateend = Date.parse(req.body.dateend);

      bug.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;