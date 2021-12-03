const router = require('express').Router()

const authRouter = require('./auth.js')
const conversationRouter = require('./conversation.js')

router.use('/auth', authRouter)
router.use('/conversation', conversationRouter)

module.exports = router