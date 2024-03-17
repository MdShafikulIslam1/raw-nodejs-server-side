const http = require("http");

// app object - module scaffolding
const app = {};

app.config = {
  port: 3000,
};

app.createServer = () => {
  const server = http.createServer(app.handleRequestResponse);
  server.listen(app.config.port, () => {
    console.log(`Server is running on port ${app.config.port}`);
  });
};

app.handleRequestResponse = (req, res) => {
  console.log("Hello World!");
  res.end("Hello World!");
};

app.createServer();
