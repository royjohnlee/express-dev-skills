const skills = [
    { id: 125223, skill: 'JavaScript', done: true },
    { id: 127904, skill: 'Express/NodeJS', done: false },
    { id: 139608, skill: 'Python', done: false }
];


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};
function deleteOne(id) {
    id = parseInt(id);

    // Find the index for the skill
    const index = skills.findIndex(skill => skill.id === id)
    skills.splice(index, 1);
};

function create(skill) {
    //Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill)
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
}
