const express = require('express');
const cors=require('cors')
const mongoose = require('mongoose');
const connectDB=require('./db/connect')
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const teamRoutes = require('./routes/teams');
const submissionRoutes = require('./routes/submissions');
// const { mongoURI } = require('./utils/constants');

// require('dotenv').config()

const app = express();

app.use(cors());
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


// mongoose.connect(process.env.mongoURI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start server
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//   })
//   .catch(err => console.error(err));

const port=process.env.PORT || 3000;

const start=async()=>{
    try{
        await connectDB(process.env.mongoURI)
        app.listen(port,console.log(`Server listening on port ${port} ...`))
    }catch(error){
        console.log(error)
    }

}

start();