// backend/api/submit.js
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://davidson4988:Jason2005@davidson.ljv3s.mongodb.net/")
  .catch((err) => console.log('Failed to connect to MongoDB', err));

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
  if (req.method === 'POST') {
    const { name, email, phone, studyAbroad, iletsStatus, preferedProgram, City, passStatus, needGuidence, highEdu } = req.body;
    
    try {
      const newForm = new Form({ name, email, phone, studyAbroad, iletsStatus, preferedProgram, City, passStatus, needGuidence, highEdu });
      await newForm.save();
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Error saving form data', error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
