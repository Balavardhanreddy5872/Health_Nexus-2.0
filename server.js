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
import Patient from "./models/PatientReg.js";
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
// import jwt from 'jsonwebtoken';

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
app.use("/api/lab", labRoutes)
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// ---------------------------------------------



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/register', upload.single('profileImage'), async (req, res) => {
  try {
    const { name, email, password, repassword, specialization } = req.body;
    const profileImage = req.file ? req.file.filename : null;
    const newUser = await User.create({
      name,
      email,
      password,
      repassword,
      specialization,
      profileImage,
    });
    res.json(newUser)
    // res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




// ---------------------------------------------


// Requests
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to HealthNexus  app",
  });
});


// app.post("/register", async (req, res) => {
//   const { name,
//     email,
//     password,
//     repassword,
//     specialization } = req.body
//   try {
//     const userDoc = await User.create({
//       name,
//       email,
//       password,
//       repassword,
//       specialization
//     })
//     res.json(userDoc)
//   } catch (err) {
//     res.status(400).json(err)
//   }
// });

app.post("/patientdetails", async (req, res) => {
  const {
    patientName,
    patientEmail,
    patientPhone,
    appointmentDate,
    specialization,
    reason } = req.body
  console.log(patientEmail)
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
    console.log(err)
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

app.get('/doctordet', async (req, res) => {
  try {
    const data = await User.find({})
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


app.get('/UserPat2', async (req, res) => {
  try {
    const data = await Patient.find({})
    // const data2 = await User.find({})
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
      specialization: user.specialization,
      profileImage: user.profileImage
    });

  } catch (error) {
    res.status(500).send('Server error');
  }
});



// app.post('/doctprofile2', async(req,res)=>{
//   try {
//     const { specialization } = req.body;
//     const user = await User.findOne({ _id: specialization });
//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     res.json({
//       patientName: user.patientName,
//       patientEmail: user.patientEmail,
//       patientPhone: user.patientPhone,
//       appointmentDate: user.appointmentDate,
//       specialization: user.specialization
//     });

//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// })




app.post('/rejectAppointment', async (req, res) => {
  const { appointmentId } = req.body;

  try {
    const appointmentToDelete = await Patient.findById(appointmentId);

    if (!appointmentToDelete) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    await appointmentToDelete.deleteOne();
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    console.error('Failed to delete appointment:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



//Local host port number 
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});