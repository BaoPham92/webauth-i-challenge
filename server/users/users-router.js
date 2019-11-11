const router = require('express').Router();

router.get('/', (req, res) => {
    return res.send(`<h1>Welcome to Users endpoint</h1>`)
})

module.exports = router;