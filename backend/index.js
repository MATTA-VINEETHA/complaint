require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Complaint, User } = require('./Schema');
const config = require('./config');

const app = express();

// ✅ Use CORS - Allow all origins for dev or restrict to specific one
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
  'http://localhost:3004',
  'http://localhost:3005'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Middleware
app.use(bodyParser.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📊 Available collections:', collections.map(c => c.name));
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};
connectDB();

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// POST: Create complaint
app.post('/api/complaints', async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
    const complaint = new Complaint({
      ...req.body,
      status: 'pending',
      createdAt: new Date()
    });
    await complaint.save();
    res.status(201).json({ success: true, data: complaint });
  } catch (error) {
    console.error('Error creating complaint:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET: Fetch complaints
app.get('/api/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json({ success: true, count: complaints.length, data: complaints });
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// POST: Register user
app.post('/api/register', async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const user = new User(req.body);
    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({ success: true, data: userResponse });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error('🚨 Unhandled error:', err.message || err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Start server
const server = app.listen(config.PORT, () => {
  console.log(`🚀 Server running on port ${config.PORT}`);
});

// Graceful shutdown
process.on('unhandledRejection', (err) => {
  console.error('⚠️ Unhandled Rejection:', err.message);
  server.close(() => process.exit(1));
});
