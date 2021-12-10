const jwt = require('jsonwebtoken')
const { WebSocketServer } = require('ws')

const User = require('../model/User')
const { newMessage, typing } = require('./controller/message')
const { handleOffer, handleAnswer, handleCandidate, handleLeave, handleIncommingCall, handleSignaling } = require('./controller/signaling')

const { removeUser, addUser } = require('./util')

const initWebsocketServer = (server) => {
    const wss = new WebSocketServer({
        server,
        verifyClient: (info, done) => {
            let cookies = {}

            if (info.req.headers.cookie)
                info.req.headers.cookie.split(';').forEach(function (cookie) {
                    var parts = cookie.match(/(.*?)=(.*)$/);
                    var name = parts[1].trim();
                    var value = (parts[2] || '').trim();
                    cookies[name] = value;
                });

            const { id } = jwt.verify(cookies.token, process.env.JWT_SECRET)
            User.findById(id)
                .then(user => {
                    info.req.user = user
                    done(true)
                }).catch(err => {
                    console.log(err)
                    done(false, 403)
                })
        }
    })

    wss.on('connection', (ws, req) => {
        ws.id = req.headers['sec-websocket-key']
        addUser(req.user._id, ws)
        console.log('client connect:')
        ws.on('message', data => {
            const buf = Buffer.from(data)
            const receiveObj = JSON.parse(buf.toString())
            console.log(receiveObj.type)
            if (receiveObj.type)
                switch (receiveObj.type) {
                    case 'new-message':
                        newMessage(req.user, receiveObj)
                        break
                    case 'start-typing':
                        typing(req.user, receiveObj)
                        break
                    case 'end-typing':
                        typing(req.user, receiveObj)
                        break
                    // signaling case
                    case 'make-call':
                        handleIncommingCall(req.user, receiveObj)
                        break
                    case 'signaling':
                        handleSignaling(req.user, receiveObj)
                        break
                    case 'offer':
                        handleOffer(req.user, receiveObj)
                        break
                    case 'answer':
                        handleAnswer(req.user, receiveObj)
                        break
                    case 'candidate':
                        handleCandidate(req.user, receiveObj)
                        break
                    case 'leave':
                        handleLeave(req.user, receiveObj)
                        break
                    // end signaling case
                    default:
                        ws.send(JSON.stringify({
                            type: 'error',
                            payload: {
                                message: 'not found command ' + receiveObj.type
                            }
                        }))
                        break

                }
        })
        ws.on('close', () => {
            console.log('client disconnect')
            removeUser(req.user._id, ws.id)
        })
    })
}

module.exports = initWebsocketServer