module.exports = {
    index,
    show,
    new: newSkill,
    create,
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

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}