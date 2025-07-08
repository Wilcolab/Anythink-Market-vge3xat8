const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// Hey GitHub Copilot, help me build awesome API endpoints for comments

/**
 * @route GET /api/comments
 * @description Retrieve all comments with populated author information
 * @access Public
 * @returns {Object} JSON object containing array of comments
 */
// GET all comments
router.get('/', async (req, res, next) => {
  try {
    const comments = await Comment.find({}).populate('author').exec();
    return res.json({
      comments: comments.map(comment => comment.toJSONFor())
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route GET /api/comments/:id
 * @description Get a specific comment by ID
 * @access Public
 * @param {string} id - The ID of the comment to retrieve
 * @returns {Object} Comment object or error if not found
 */
// GET comment by ID
router.get('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('author');
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    return res.json({ comment: comment.toJSONFor() });
  } catch (error) {
    next(error);
  }
});

/**
 * @route POST /api/comments
 * @description Create a new comment
 * @access Private
 * @param {Object} body - Comment data including body and author
 * @returns {Object} Created comment object
 */
// Create a new comment
router.post('/', async (req, res, next) => {
  try {
    const comment = new Comment(req.body.comment);
    await comment.save();
    await comment.populate('author');
    return res.status(201).json({ comment: comment.toJSONFor() });
  } catch (error) {
    next(error);
  }
});

/**
 * @route DELETE /api/comments/:id
 * @description Delete a specific comment by its ID
 * @access Private
 * @param {string} id - The ID of the comment to delete
 * @returns {Object} Success message or error if comment not found
 */
// Endpoint to delete a comment by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    return res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
