const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought').schema;

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,        
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      max_length: 50,
    },
    thoughts: [thoughtSchema],

    friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const Users = model('users', userSchema);

module.exports = Users;
