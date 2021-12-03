const Conversation = require("../../model/Conversation")

const { emitToConversationsExeptSender, wsData } = require('../util.js')

exports.handleOffer = async (sender, data) => {
    const { type, payload } = data

    const conversation = await Conversation.findById(payload.conversationId)
    // const sendingData = wsData(type, { offer: payload.offer })
    // const forwardData = wsData(type,payload)
    emitToConversationsExeptSender(conversation.memberIds, sender._id, data)
}

exports.handleAnswer = async (sender, data) => {
    const { type, payload } = data
    console.log('answer')
    const conversation = await Conversation.findById(payload.conversationId)
    const senddingData = wsData(type, { answer: payload.answer })
    emitToConversationsExeptSender(conversation.memberIds, sender._id, senddingData)
}
exports.handleLeave = async (sender, data) => {
    const { type, payload } = data

    const conversation = await Conversation.findById(payload.conversationId)
    const senddingData = wsData(type, {})
    emitToConversationsExeptSender(conversation.memberIds, sender._id, senddingData)
}
exports.handleCandidate = async (sender, data) => {
    const { type, payload } = data

    const conversation = await Conversation.findById(payload.conversationId)
    const senddingData = wsData(type, { candidate: payload.candidate })
    emitToConversationsExeptSender(conversation.memberIds, sender._id, senddingData)
}
