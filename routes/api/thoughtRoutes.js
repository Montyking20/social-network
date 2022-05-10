const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateSingleThought,
  removeThought,
  createThoughtReaction,
  removeThoughtReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateSingleThought).delete(removeThought)

router.route('/:thoughtId/reactions').post(createThoughtReaction).delete(removeThoughtReaction)


module.exports = router;
