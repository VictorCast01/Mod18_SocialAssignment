const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require('../../controllers/thought-controller');


router.route('/').get(getThoughts).post(createThought);


router.route('/:thoughtId').get(getSingleThought);

module.exports = router;