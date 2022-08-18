const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Movie.findAll({
        include: db.Genre,
      });
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
