const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static("public"));

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/equipmentRental", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Equipment Schema
const equipmentSchema = new mongoose.Schema({
  name: String,
  price: Number,
  old_price: Number,
  description: String,
  model_name: String,
  max_load_capacity: String,
  boom_length: String,
  rotation: String,
  max_travel_speed: String,
  fuel_type: String,
  control_system: String,
  dimensions: String,
  weight: String,
  image_url: String,
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

// Route to fetch equipment details
app.get("/equipment/:id", async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) return res.status(404).send("Equipment not found!");

    res.send(equipment);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
