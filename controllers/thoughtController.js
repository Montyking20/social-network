// ObjectId() method for converting thoughtId string into an ObjectId for querying database
const {Thought } = require('../models/Thought');

module.exports = {

  // Get thoughts
  getThoughts(req, res) {
    Thought.find()
      .then(async (thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
    },

  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thought))
      .catch((err) => res.status(500).json(err));
    },

  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((newThought) => res.json(newThought))
      .catch((err) => res.status(500).json(err));
  },


  // Delete a Thought and remove from the user
  removeThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such Thought exists!' })
          : res.json({ message: "Thought removed!" }))
      .catch((err) => res.status(500).json(err));
  },

  // Update a thought by its id
  updateSingleThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Thought not found with this id!" })
          : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // Add a thought reaction
  createThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reaction: req.body } },
      { runValidators: true, new: true })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: "Thought not found with this id!" })
          : res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },

  // Remove thought reaction
  removeThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reaction: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Thought not found with this id!" })
          : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
};









