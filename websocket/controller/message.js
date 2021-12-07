const User = require('../../model/User.js')
const Conversation = require('../../model/Conversation.js')
const Message = require('../../model/Message.js')
const { emitToUser, wsData } = require('../util.js')
exports.newMessage = async (sender, data) => {
    try {
        const { type, payload } = data

        let { conversationId } = payload

        let conversation
        if (!conversationId) {
            if (!payload.type || payload.type === 'single') {
                conversation = await Conversation.findOne({ $and: [{ type: 'single' }, { memberIds: { $all: payload.memberIds } }] })
            }
            if (!conversation) {
                conversation = await Conversation.create({
                    memberIds: payload.memberIds,
                    ownerId: sender._id
                })
            }

        } else {
            conversation = await Conversation.findById(conversationId)
        }

        const newMessage = await Message.create({
            ...payload,
            conversationId: conversation._id,
            senderId: sender._id
        })
        // emit to users
        const returnMessage = wsData(type, { message: newMessage.toObject() })

        conversation.memberIds.forEach(memberId => {
            if (memberId.toString() === sender._id.toString())
                returnMessage.payload.message.isMine = true
            else
                returnMessage.payload.message.isMine = false

            emitToUser(memberId, returnMessage)
        })
        // attach lastmessage
        conversation.lastMessageId = newMessage._id
        await conversation.save()
        // change state to unread in received
    } catch (error) {
        console.log(error)
    }
}

exports.typing = async (sender, data) => {
    const { type, payload } = data
    const conversation = await Conversation.findById(payload.conversationId)
    const returnMessage = wsData(type, { user: sender, conversationId: payload.conversationId })
    conversation.memberIds.forEach(memberId => {
        if (memberId.toString() !== sender._id.toString()) {
            emitToUser(memberId, returnMessage)
        }
    })
}