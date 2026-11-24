# node-proxy-servers

Simple forward proxy and reverse proxy servers built with Node.js, Express and Axios, each with its own backend server. A hands-on system design exercise showing how client requests are routed through proxies.

## Project structure

```
proxy_server/
├── server/          # Backend server (port 3001)
├── forwarrd_proxy/  # Forward proxy (port 3000)
└── reverse_proxy/   # Reverse proxy (port 4000)
```

| Service       | Port | What it does                                                        |
| ------------- | ---- | ------------------------------------------------------------------- |
| server        | 3001 | Backend server. `GET /` returns `Response from the server`.         |
| forwarrd_proxy | 3000 | Forward proxy. Sends the request to whatever URL is in `?url=`.    |
| reverse_proxy | 4000 | Reverse proxy. Sends every request to the backend server on 3001. |

## How it works

**Forward proxy:** the client picks the destination.

```
Client ──▶ Forward Proxy (3000) ──▶ any URL given in ?url=
```

**Reverse proxy:** the client only knows the proxy, and the proxy picks the backend.

```
Client ──▶ Reverse Proxy (4000) ──▶ Backend Server (3001)
```

## Getting started

Requires Node.js 18 or later.

Install dependencies in each folder:

```bash
cd server && npm install && cd ..
cd forwarrd_proxy && npm install && cd ..
cd reverse_proxy && npm install && cd ..
```

Start each service in its own terminal:

```bash
cd server && node index.js
cd forwarrd_proxy && node index.js
cd reverse_proxy && node index.js
```

## Try it

```bash
# Backend server directly
curl http://localhost:3001

# Through the forward proxy (quote the URL so zsh doesn't treat ? as a wildcard)
curl "http://localhost:3000/?url=http://localhost:3001"

# Through the reverse proxy
curl http://localhost:4000
```

Each command should return:

```
Response from the server
```

## Tech stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
