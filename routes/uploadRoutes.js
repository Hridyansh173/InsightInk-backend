const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

// Route for file uploads
router.post('/', upload.single('file'), (req, res) => {
  if (req.file) {
    res.status(200).json({
      message: 'File uploaded successfully',
      filePath: `/uploads/${req.file.filename}`
    });
  } else {
    res.status(400).json({ message: 'File upload failed' });
  }
});

module.exports = router;
