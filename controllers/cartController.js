const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('cartItems.product');
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addToCart = async (req, res) => {
    const { productId, name, imageUrl, price, quantity, userId } = req.body;

    const product = await Product.findById({
        _id: productId
    });
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
    }

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
        const itemIndex = cart.cartItems.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.cartItems[itemIndex].quantity += quantity;
        } else {
            cart.cartItems.push({ product: productId, name, imageUrl, price, quantity });
        }
    } else {
        cart = new Cart({
            user: userId,
            cartItems: [{ product: productId, name, imageUrl, price, quantity }]
        });
    }

    await cart.save();
    res.status(200).json(cart);
};

exports.removeFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const productId = req.params.productId;

        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.cartItems = cart.cartItems.filter(item => item.product.toString() !== productId);
        await cart.save();

        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
