require('dotenv').config();
const express = require('express')
const cors = require('cors')
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes')
const app = express();

//middleware for cors
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

connectDB();
//middleware for 
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
/*app.use("/api/users", userRoutes);
app.user("/api/tasks", taskRoutes);
app.user("/api/reports", reportRoutes);*/

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))