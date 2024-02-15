import express, { json } from "express";
const app = express();
import { config } from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import authRouter from './routes/authRoutes.js';
import cors from 'cors';
import productRoutes from './routes/ProductRoutes.js'
import labRoutes from './routes/labRoutes.js'
import User from "./models/Doctorreg_m.js";
import mRoutes from "./routes/mRoutes.js"
import Patient from "./models/PatientReg.js";
import bodyParser from 'body-parser';

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
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(json());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes 
app.use("/api/auth", authRouter);
app.use("/api/product", productRoutes);
app.use("/api/lab", labRoutes);
app.use("/api/blog",mRoutes);

// Requests
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to HealthNexus  app",
  });
});


app.post("/register", async (req, res) => {
  const { name,
    email,
    password,
    repassword,
    specialization } = req.body
  try {
    const userDoc = await User.create({
      name,
      email,
      password,
      repassword,
      specialization
    })
    res.json(userDoc)
  } catch (err) {
    res.status(400).json(err)
  }
});

app.post("/patientdetails", async (req, res) => {
  const {
    patientName,
    patientEmail,
    patientPhone,
    appointmentDate,
    specialization,
    reason, } = req.body
  try {
    const userDoc = await Patient.create({
      patientName,
      patientEmail,
      patientPhone,
      appointmentDate,
      specialization,
      reason,
    })
    res.json(userDoc)
  } catch (err) {
    res.status(400).json(err)
  }
});


app.get('/UserPat', async (req, res) => {
  try {
    const data = await Patient.find({})
    if (data) {
      res.status(200).json(data);
    }
    else {
      res.status(400).json("Wrong Credientials")
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  console.log(user)
  if (user && password === user.password) {
    res.json({ id: user._id })
  } else {
    res.status(401).send('Authentication failed');
  }
});

app.post('/doctprofile', async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json({
      email: user.email,
      name: user.name,
      specialization: user.specialization
    });

  } catch (error) {
    res.status(500).send('Server error');
  }
});


//Local host port number 
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});