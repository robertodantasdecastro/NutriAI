const { Router } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = Router();

// PT-BR: Rota de registro
// EN: Register route
router.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// PT-BR: Rota de login
// EN: Login route
router.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(401).json({ error: 'Invalid' });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
