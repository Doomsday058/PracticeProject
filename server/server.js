const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());            // parse JSON bodies
app.use(cors());                    // enable CORS for all origins (в реальном проекте можно настроить origin)

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/myapp';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple schema and model (optional example)
const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

// Example API endpoint: get all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

app.post('/api/items', async (req, res) => {
  console.log('Получили данные:', req.body); // Добавьте этот вывод
  try {
    const newItem = new Item(req.body);
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Ошибка при сохранении:', err);
    res.status(400).json({ error: 'Failed to create item' });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
