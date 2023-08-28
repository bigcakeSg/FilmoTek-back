const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Data OK' });
});

router.post('/', (req, res) => {
  res.json({ reponse: `${req.body.message}: ${req.body.test}` });
});

router.put('/:id', (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Deleted: ${req.params.id}` });
});

router.patch('/like-post/:id', (req, res) => {
  res.json({ message: `Like: ${req.params.id}` });
});

router.patch('/dislike-post/:id', (req, res) => {
  res.json({ message: `Dislike: ${req.params.id}` });
});

module.exports = router;
