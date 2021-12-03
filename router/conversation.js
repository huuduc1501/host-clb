const router = require('express').Router()

const { getConversations, getMessages } = require('../controller/conversation.js')
const { protect } = require('../middleware/auth.js')

router.use(protect)
router.get('/', getConversations)
router.get('/:conversationId/message',getMessages)

module.exports = router