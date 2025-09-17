const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Serve MW.html at root
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'MW.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});