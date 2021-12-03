const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Conversation = new Schema({
  type: {
    type: String,
    enum: ['group', 'single'],
    require: true,
    default: 'single'
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  lastMessageId: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  },
  memberIds: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }],
  title: {
    type: String
  }
}
  ,
  {
    timestamps: true,
  });

module.exports = mongoose.model('Conversation', Conversation)