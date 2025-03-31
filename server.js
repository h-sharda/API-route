const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.post('/test', (req, res) => {
  const url = req.body.imageUrl;
  console.log('url:', url);

  const rand = generateRandomString(10);
  console.log(rand);

  res.json({ numberPlate: rand });
});

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
});

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}
  