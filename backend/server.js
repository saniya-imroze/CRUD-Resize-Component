// Updated app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
