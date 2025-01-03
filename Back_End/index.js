import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js'
import PostRoute from'./Routes/PostRoute.js';



dotenv.config();
const app = express();



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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


app.use('/auth',AuthRoute);
app.use('/user',UserRoute);
app.use('/post',PostRoute);