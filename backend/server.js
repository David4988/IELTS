// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb+srv://davidson4988:Jason2005@davidson.ljv3s.mongodb.net/")
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// MongoDB Schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  studyAbroad: String,
  ieltsStatus: String,
  preferedProgram: String,
  City: String,
  passStatus: String,
  needGuidence: String,
});

const Form = mongoose.model('Form', formSchema);

// Routes
app.post('/submit', async (req, res) => {
  const { name, email, phone, studyAbroad, ieltsStatus, preferedProgram, City, passStatus, needGuidence, highEdu } = req.body;
  
  try {
    const newForm = new Form({ name, email, phone, studyAbroad, ieltsStatus, preferedProgram, City, passStatus, needGuidence, highEdu });
    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving form data', error: err });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
