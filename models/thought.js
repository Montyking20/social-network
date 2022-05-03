const { Schema, model } = require('mongoose');
const user = require('./user');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      timestamp: true,
      
    },
    username: {
      type: String,
      required: true,
    },
    
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thought = model('thought', thoughtSchema);

module.exports = thought;
