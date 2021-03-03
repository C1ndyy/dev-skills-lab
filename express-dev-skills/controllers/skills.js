module.exports = {
    index,
    show,
}

const Skill = require('../models/skills-db')

function index(req, res) {
    res.render('skills/index', {skills: Skill.getAll()})
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}