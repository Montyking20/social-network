// ObjectId() method for converting studentId string into an ObjectId for querying database
const User = require('../models/User');

module.exports = {

    // Get all users
    getUsers(req, res) {
      User.find()
        .then(async (users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    // Get a single User
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'User with that ID not found!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user and remove them from the course
  removeUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists!' })
          : res.json({ message: 'User successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },

     // update by ID
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists with that ID!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Adding a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists with that ID!' })
          : res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Remove a friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { $in: req.params.friendId } } },
      { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists with that ID!' })
          : res.json(user))
      .catch((err) => res.status(500).json(err));
  },
};
