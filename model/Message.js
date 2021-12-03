const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Message = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['text', 'image', 'notification', 'file'],
    default: 'text',
  },
  message: {
    type: String,
    default: 'default message',
  },
  senderId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  images: [{ type: String }],
  files: [{
    name: String,
    path: String,
  }],
  conversationId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Conversation'
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
    default: Date.now(),
  }
},
);

// Message.pre('save',function(next){
//   if(typeof this.createdAt === 'number')
//   this.createdAt = 
// })

module.exports = mongoose.model('Message', Message)