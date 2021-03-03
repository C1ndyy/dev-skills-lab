const skills = [
    {id: 1, skill: "HTML Basics", complete: true},
    {id: 2, skill: "CSS Basics", complete: true},
    {id: 3, skill: "CSS Responsive Design", complete: true},
    {id: 4, skill: "CSS Flexbox and Grid", complete: true},
    {id: 5, skill: "NodeJS", complete: true},
    {id: 6, skill: "EJS", complete: true},
    {id: 7, skill: "MongoDB", complete: false},
    {id: 8, skill: "Mongoose", complete: false},
    {id: 9, skill: "JS Fundamentals", complete: false},
    {id: 10, skill: "Data Modeling", complete: false},
    {id: 11, skill: "Python", complete: false},
    {id: 12, skill: "Django", complete: false},
    {id: 13, skill: "Authentication", complete: false},
]

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id ===parseInt(id));
} 