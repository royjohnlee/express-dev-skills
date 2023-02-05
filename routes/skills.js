var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// ALL router must start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/new  <-- `/new` MUST be define BEFORE show route (Part1 of Creating new Skill)
router.get('/new', skillsCtrl.new);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// POST /skills  <--  connecting (Part2 of Creating new Skill)
router.post('/', skillsCtrl.create);

// DELETE /skills/:id
router.DELETE('/', skillsCtrl.delete);



module.exports = router;
