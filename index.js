const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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
  //get request url
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;
  const trimmedPath = pathname.replace(/^\/+|\/+$/g, "");
  const queryStringObject = parseUrl.query;
  const reqMethod = req.method.toLowerCase();
  const headerObject = req.headers;

  const reqBodyDecoder = new StringDecoder();

  let reqBodyData = "";

  req.on("data", (buffer) => {
    reqBodyData += reqBodyDecoder.write(buffer);
  });

  req.on("end", () => {
    reqBodyData += reqBodyDecoder.end();
  });

  res.end("Hello World!");
};

app.createServer();
