import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';

dotenv.config();
const app = express();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files (images)
app.use('/image', express.static(path.join(__dirname, 'public', 'image')));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Database is Connected"))
  .catch((error) => console.error("Database connection error:", error.message));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Listening at port 5000");
});

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/upload', UploadRoute);
