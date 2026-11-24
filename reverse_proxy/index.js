import express from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware';

const app = express();

app.use((req, res, next) => {
  const url = "http://localhost:3001";

  const proxyMiddleware = createProxyMiddleware({
    target: url,
    changeOrigin: true,
    pathRewrite: {
      '^/': '/', // Remove the leading slash from the path
    },
  });

  proxyMiddleware(req, res, next);
});

app.listen(4000, () => {
  console.log(`Forward Proxy server is running on port 4000`);
});