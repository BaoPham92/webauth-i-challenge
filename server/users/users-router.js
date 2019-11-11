const router = require('express').Router();
const Users = require('./user-model');
const Auth = require('../auth/authorization');

router.get('/', Auth, (req, res) => {
    Users.getAll()
    .then(userList => res.status(200).json(userList))
    .catch(err => res.status(500).json({ 
        message: 'Could not get list of users from database.',
        errorMessage: err
     }))
})

module.exports = router;