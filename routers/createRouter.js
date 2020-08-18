const express = require('express')
const router = express.Router()

router.get('/create-post', (req, res) => {
	res.render('createPost')
})

module.exports = router
