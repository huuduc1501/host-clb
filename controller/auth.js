const User = require('../model/User.js')

const asyncHandler = require('../middleware/asyncHandler.js')

exports.signup = asyncHandler(async (req, res, next) => {
    const { email, password, fullname } = req.body

    const user = await User.create({ email, password, fullname })

    const token = user.getJwtToken()

    res.cookie('token', token)
    res.status(200).json({ success: true })
})

exports.signin = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return next(new Error('fail'))
    const isMatch = await user.checkPassword(password.toString())
    if (isMatch) {
        const token = user.getJwtToken()
        res.cookie('token', token)
        res.status(200).json({ success: true })
        return
    }
    next(new Error('invalid'))
})

exports.getMe = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: req.user })
})