import express from 'express';
import axios from 'axios';

const app = express();

app.all(/.*/, async (req, res) => {
  const url = req.query.url;

  console.log(`Forwarding request to: ${url}`);
  if (!url) {
    return res.status(400).send('Missing url query parameter');
  }

  axios({
    method: req.method,
    url: url,
    headers: req.headers,
    data: req.body,
  })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      if (error.response) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(500).send('Error occurred while forwarding the request');
      }
    });
});

app.listen(3000, () => {
  console.log(`Forward Proxy server is running on port 3000`);
});