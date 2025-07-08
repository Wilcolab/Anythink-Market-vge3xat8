const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

// Initial tasks array - migrated from Python server
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

app.get('/', (req, res) => {
  res.json({ message: 'Node.js Express server is running!' });
});

// GET /tasks - retrieve all tasks (migrated from Python)
app.get('/tasks', (req, res) => {
  res.json({ tasks: tasks });
});

// POST /tasks - add a new task (migrated from Python)
app.post('/tasks', (req, res) => {
  console.log('POST /tasks received:', req.body);
  const { text } = req.body;
  
  if (!text) {
    console.log('No text provided');
    return res.status(400).json({ error: 'Task text is required' });
  }
  
  tasks.push(text);
  console.log('Task added:', text);
  console.log('Current tasks:', tasks);
  res.json({ message: 'Task added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
