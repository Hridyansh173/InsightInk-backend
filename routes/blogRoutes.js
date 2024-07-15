const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { protect } = require('../middleware/authMiddleware'); // Import your authentication middleware

// Get all blog posts
router.get('/getblog', async (req, res) => {
  try {
    const blogs = await Post.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new blog post
router.post('/createblog', protect, async (req, res) => {
  try {
    const { title, content, images, videos } = req.body;
    const newPost = new Post({
      title,
      content,
      author: req.user._id, // Assigning the authenticated user's ID as the author
      images,
      videos
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a specific blog post by ID
router.get('/getbyid/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a blog post by ID
router.put('/updatebyid/:id', protect, async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, images, videos } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(postId, { title, content, images, videos }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a blog post by ID
router.delete('/delete/:id', protect, async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
