const { signin, signup, getMe } = require('../controller/auth')
const { protect } = require('../middleware/auth.js')

const router = require('express').Router()


router.post('/signin', signin)
router.post('/signup', signup)
router.get('/me', protect, getMe)
// router.get('/me')

module.exports = router
