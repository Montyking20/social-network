// ObjectId() method for converting thoughtId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { user, thought } = require('../models');



module.exports = {

  // Get thoughts
  getThoughts(req, res) {
    thought.find()
      .then(async (thoughts) => {
        const thoughtObj = {
          thoughts,
        };
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single thought
  getSingleThought(req, res) {
    thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .lean()
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({
              thought,
          })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // create a new thought
  createThought(req, res) {
    thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },


  // Delete a thought and remove from the user
  deleteThought(req, res) {
    thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : user.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'thought deleted, but no user found',
            })
          : res.json({ message: 'thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};











//   // Add an assignment to a thought
//    addAssignment(req, res) {
//   console.log('You are adding an assignment');
//   console.log(req.body);
//   Thought.findOneAndUpdate(
//   { _id: req.params.thoughtId },
//   { $addToSet: { assignments: req.body } },
//   { runValidators: true, new: true }
//   )
//   .then((thought) =>
//   !thought
//   ? res
//   .status(404)
//   .json({ message: 'No thought found with that ID :(' })
//   : res.json(thought)
//   )
//   .catch((err) => res.status(500).json(err));
//   },
//   // Remove assignment from a thought
//  removeAssignment(req, res) {
// Thought.findOneAndUpdate(
// { _id: req.params.thoughtId },
// { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
// { runValidators: true, new: true }
// )
// .then((thought) =>
// !thought
// ? res
// .status(404)
// .json({ message: 'No thought found with that ID :(' })
// : res.json(thought)
// )
// .catch((err) => res.status(500).json(err));
// },
// };





// // // TODO: Create an aggregate function to get the number of thoughts overall
// const headCount = async () =>
// thought.aggregate()
//  // Your code here
// .then((numberOfthoughts) => numberOfthoughts);

// // Execute the aggregate method on the thought model and calculate the overall grade by using the $avg operator
// const grade = async (thoughtId) =>
//  thought.aggregate([
// // TODO: Ensure we include only the thought who can match the given ObjectId using the $match operator
// {
//  // Your code here
// },
// {
// $unwind: '$assignments',
// },
//  // TODO: Group information for the thought with the given ObjectId alongside an overall grade calculated using the $avg operator
// {
// // Your code here
// },
// ]);


