const { render } = require('ejs');
var express = require('express');
var router = express.Router();

let skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/',skillsCtrl.index);
router.get('/new', skillsCtrl.new)
router.get('/:id',skillsCtrl.show);
router.get('/:id/edit', skillsCtrl.editForm)

router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)
router.put('/:id', skillsCtrl.edit)


module.exports = router;
