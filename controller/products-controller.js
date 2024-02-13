const db = require('../models/db')

exports.getProduct = async (req, res, next) => {
    try {
      const products = await db.Product.findMany();
      res.json(products);
    } catch (error) {
      next(error);
    }
  };

