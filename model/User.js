const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

var User = new Schema({
  bio: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Vui lòng nhập email!'],
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    // select: false,
    required: [true, 'Vui lòng nhập mật khẩu'],
    minlength: [6, "Mật khẩu ít nhất là 6 kí tự"],
    maxlength: [12, "Mật khẩu tối đa là 12 kí tự"],
  },
  fullname: {
    type: String,
    required: [true, 'Vui lòng nhập tên'],
    trim: true,
  },
  avatar: {
    type: String,
    required: true,
    default: 'https://res.cloudinary.com/dpmxnehes/image/upload/v1622450374/chat-app/avatar_gw4qvc.png',
  },
  conversations: [{
    conversationId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Conversation'
    },
    readed: {
      type: Boolean,
      required: true,
      default: false,
    }
  }],
},
  { timestamps: true }
);

User.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

User.methods.getJwtToken = function () {
  console.log(process.env.JWT_SECRET)
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  })
}

User.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', User)