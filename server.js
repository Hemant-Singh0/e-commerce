// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config({ path: ".env" });
// require('./config');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const productRoutes = require('./routes/productRoutes');
// const cartRoutes = require('./routes/cartRoutes');

// // Use routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes);

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//     console.log(`Example app listening on PORT ${PORT}!`);
// });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: ".env" });
require('./config');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // allow only your frontend app to access
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // allowed headers
    credentials: true // include credentials (e.g., cookies, authorization headers)
};

app.use(cors(corsOptions));
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
