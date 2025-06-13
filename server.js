const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);


// Sample route
app.get('/', (req, res) => {
    res.send('Contact Book API is running...');
});

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.log(err));
