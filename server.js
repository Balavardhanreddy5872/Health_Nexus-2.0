import express ,{json} from "express";
const app = express();
import { config } from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import authRouter from './routes/authRoutes.js';
import cors from 'cors';
import productRoutes from './routes/ProductRoutes.js'

// calling env object 
config();

//Connection to database 
const dbUrl = 'mongodb://0.0.0.0:27017/shopping'
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database.');
});



// middle ware 
app.use(cors());
app.use(json());
app.use(morgan('dev')); 

// Routes 
app.use("/api/auth",authRouter);
app.use("/api/product", productRoutes);

// Requests
app.get("/",(req,res)=>{
   res.send({
      message: "Welcome to HealthNexus  app",
   });
});

//Local host port number 
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});