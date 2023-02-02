const skills = [
    { id: 125223, skill: 'JavaScript', done: true },
    { id: 127904, skill: 'Express/NodeJS', done: false },
    { id: 139608, skill: 'Python', done: false }
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}
