const jwt = require('jsonwebtoken')

const User = require('../model/User.js')

exports.protect = async (req, res, next) => {

    if (req.cookies.token)

        try {
            const { id } = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
            console.log(id)
            const user = await User.findById(id)
            if (!user) return next(Error('fail'))
            req.user = user
            next()
        } catch (error) {
            next(Error(error.message))
        }
    else {
        next(Error('fail'))
    }
}