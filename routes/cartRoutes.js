const express = require('express');
const { getCart, addToCart, removeFromCart, updateFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.delete('/:productId', protect, removeFromCart);
router.put('/:productId', protect, updateFromCart);

module.exports = router;
