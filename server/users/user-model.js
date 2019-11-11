const db = require('../../data/dbConfig');

const getAll = () => db('users');

const findBy = (param) => {
    return db('users').where(param);
}

const add = (user) => {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

const findById = (id) => {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first();
}

module.exports = {
    add,
    findBy,
    findById,
    getAll
}