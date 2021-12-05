const User = require('../model/User.js')
const Conversation = require('../model/Conversation.js')

const asyncHandler = require('../middleware/asyncHandler.js')
const Message = require('../model/Message.js')

exports.getConversations = asyncHandler(async (req, res, next) => {
    const conversations = await Conversation.find({ memberIds: { $elemMatch: { $eq: req.user._id } } })
        .populate({
            path: 'lastMessageId',
            // option: {
            //     as: 'lastMessage'
            // }
        })
        .lean()
    for (let cv of conversations) {
        if (cv.type === 'single') {
            const presentUserId = cv.memberIds.find(mId => mId.toString() !== req.user._id.toString())
            console.log(presentUserId)
            const presentUser = await User.findById(presentUserId)
            // cv.toObject()
            cv.avatar = presentUser.avatar
            cv.title = presentUser.email

        }
    }
    res.status(200).json({ success: true, conversations })
})

exports.getMessages = asyncHandler(async (req, res, next) => {
    const { conversationId } = req.params
    let messages = await Message.find({ conversationId })
        .sort({ createdAt: -1 })
        .limit(40)
        .populate('senderId')
        .lean()
    for (let mess of messages) {
        if (mess.senderId._id.toString() === req.user._id.toString()) {
            mess.isMine = true
        }
    }
    messages = messages.reverse()
    res.status(200).json({ success: true, messages })
})

exports.getConversation = asyncHandler(async (req, res, next) => {
    const conversation = await Conversation.findById(req.param.conversationId).poppulate('lastMessageId')
    if (!conversation) {
        next(new Error('invalid conversation'))
        return
    }
    res.status(200).json({ success: true, data: { conversation } })
})