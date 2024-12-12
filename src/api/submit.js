import mongoose from 'mongoose';

let isConnected = false; // Track the database connection status

// MongoDB connection function (reused for each serverless function call)
async function connectToDatabase() {
  if (isConnected) return;

  try {
    await mongoose.connect("mongodb+srv://davidson4988:Jason2005@davidson.ljv3s.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    throw new Error('Database connection failed');
  }
}

// MongoDB Schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  studyAbroad: String,
  iletsStatus: String,
  preferedProgram: String,
  City: String,
  passStatus: String,
  needGuidence: String,
  highEdu: String,
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    name,
    email,
    phone,
    studyAbroad,
    iletsStatus,
    preferedProgram,
    City,
    passStatus,
    needGuidence,
    highEdu,
  } = req.body;

  try {
    await connectToDatabase();
    const newForm = new Form({
      name,
      email,
      phone,
      studyAbroad,
      iletsStatus,
      preferedProgram,
      City,
      passStatus,
      needGuidence,
      highEdu,
    });
    await newForm.save();

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ message: 'Error saving form data', error: err.message });
  }
}
