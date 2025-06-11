const { Router } = require('express');
const Meal = require('../models/Meal');

const router = Router();

// PT-BR: Cria refeição
// EN: Create meal
router.post('/', async (req, res) => {
  const meal = await Meal.create(req.body);
  res.json(meal);
});

// PT-BR: Lista refeições
// EN: List meals
router.get('/', async (req, res) => {
  const meals = await Meal.findAll();
  res.json(meals);
});

module.exports = router;
