// Required Libraries
const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Atlas URI
const dbURI = "mongodb+srv://gauravmishra212301:<is6chLblXeFfJ89P>@cluster0.y5z1x.mongodb.net/";

// Connect to MongoDB Atlas
mongoose.set('strictQuery', false); // Prevent deprecation warning
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas successfully!'))
  .catch(err => console.error('MongoDB Atlas connection error:', err));

// Equipment Schema (Mongoose Schema)
const equipmentSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  available: Boolean,
  image: String, // Field to store image filename
});

// Equipment Model
const Equipment = mongoose.model('Equipment', equipmentSchema);

// Validation Schema (Joi Schema)
const equipmentValidationSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  price: Joi.number().positive().required(),
  available: Joi.boolean().required(),
});

// Multer Configuration for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ dest: 'uploads/' });

// Routes

// Home Route
app.get('/', (req, res) => {
  res.send('Backend is running Gaurav!');
});

// Route to get all equipment
app.get('/api/equipment', (req, res) => {
  Equipment.find()
    .then(equipmentList => {
      res.json({ message: 'Fetched equipment data!', data: equipmentList });
    })
    .catch(err => res.status(500).json({ message: 'Error fetching equipment', error: err }));
});

// Route to add new equipment with image upload
app.post('/api/equipment', upload.single('image'), (req, res) => {
  const { error } = equipmentValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Invalid data', error: error.details });
  }

  const { name, type, price, available } = req.body;
  const newEquipment = new Equipment({
    name,
    type,
    price,
    available,
    image: req.file ? req.file.filename : null, // Store image filename
  });

  newEquipment
    .save()
    .then(equipment => {
      res.status(201).json({ message: 'Equipment added successfully!', data: equipment });
    })
    .catch(err => res.status(500).json({ message: 'Error adding equipment', error: err }));
});

// Route to update equipment
app.put('/api/equipment/:id', upload.single('image'), (req, res) => {
  const { error } = equipmentValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Invalid data', error: error.details });
  }

  const { id } = req.params;
  const updatedData = {
    ...req.body,
    image: req.file ? req.file.filename : undefined, // Update image if provided
  };

  Equipment.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedEquipment => {
      if (updatedEquipment) {
        res.json({ message: 'Equipment updated!', data: updatedEquipment });
      } else {
        res.status(404).json({ message: 'Equipment not found for update!' });
      }
    })
    .catch(err => res.status(500).json({ message: 'Error updating equipment', error: err }));
});

// Route to delete equipment
app.delete('/api/equipment/:id', (req, res) => {
  const { id } = req.params;
  Equipment.findByIdAndDelete(id)
    .then(deletedEquipment => {
      if (deletedEquipment) {
        res.json({ message: 'Equipment deleted successfully!' });
      } else {
        res.status(404).json({ message: 'Equipment not found for deletion!' });
      }
    })
    .catch(err => res.status(500).json({ message: 'Error deleting equipment', error: err }));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
