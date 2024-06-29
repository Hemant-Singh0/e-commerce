const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: ".env" });
require('./config');

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}!`);
});