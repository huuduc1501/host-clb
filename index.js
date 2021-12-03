require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')

const initWebsocketServer = require('./websocket')

const indexRoute = require('./router')


const app = express()
const server = require('http').createServer(app)
    ; (async () => {
        try {
            await mongoose.connect(process.env.MONGODB_URL)
            console.log('connect to mongoDB')
        } catch (error) {
            console.log('fail to connect mongoDB')
        }
    })()

initWebsocketServer(server)

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5000/', 'http://192.168.219.15:3000'],
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())


if (process.env.NODE_ENV === 'dev')
    app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/api/v1', indexRoute)

server.listen(5000, () => {
    console.log('server running in port:5000')
})
