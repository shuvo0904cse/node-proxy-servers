import express from 'express';


const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Response from the server');
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});