const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('../users/user-model');

router.get('/', (req, res) => {
    return res.send(`<h1>Welcome to Auth endpoint</h1>`)
})

router.post('/register', (req, res) => {
    let user = req.body;
    const { password, username } = user;
    console.log(user)

    !!password === true && bcrypt.hash(
        password,
        12,
        (err, hashedPassword) => {
            user.password = hashedPassword;

            Users.add(user)
                .then(newUser => res.status(201).json(newUser))
                .catch(err => res.status(500).json({
                    message: `Could register account.`,
                    errorMessage: err
                }))
        })
})

router.post('/login', (req, res) => {
    let user = req.body;
    const { password, username } = user;
    console.log(user)

    !!username === true && Users.findBy({ username })
        .first()
        .then(user => {
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ 
                    message: `Welcome to the site user: ${user.username}`
                })
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        })
        .catch(err => res.status(500).json({
            message: 'Error hitting this endpoint.',
            errorMessage: err
        }))
})

module.exports = router;