import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('✅ Backend server is running!');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
