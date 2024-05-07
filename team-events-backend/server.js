const express = require('express');
const cors=require('cors')
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const teamRoutes = require('./routes/teams');
const submissionRoutes = require('./routes/submissions');
const { mongoURI } = require('./utils/constants');

const app = express();

app.use(cors({
  origin: '*' // Allow requests from frontend domain
}));
app.use(express.json());

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', authRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/teams', teamRoutes);
app.use('/api/v1/submissions', submissionRoutes); 

// app.use(cors({
//   origin: 'http://localhost:5173' // Allow requests from frontend domain
// }));


mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error(err));