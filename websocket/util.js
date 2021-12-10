let liveUsers = {}

exports.addUser = (userId, ws) => {
    if (!liveUsers[userId]) {
        liveUsers[userId] = [ws]
    }
    else {
        liveUsers[userId].push(ws)
    }
}

exports.removeUser = (userId, wsId) => {
    if (liveUsers[userId].length <= 1) {
        delete liveUsers[userId]
    }
    else {
        liveUsers[userId] = liveUsers[userId].filter(ws => ws.id !== wsId)
    }
}

exports.emitToUser = (userId, data) => {
    if (liveUsers[userId])
        liveUsers[userId].forEach(ws => ws.send(JSON.stringify(data)))
}

exports.emitToConversationsExeptSender = (memberIds, senderId, data) => {
    memberIds.forEach(memberId => {
        if (memberId.toString() !== senderId.toString()){
            this.emitToUser(memberId, data)
        }
    })
}

exports.wsData = (type, payload) => ({ type, payload })