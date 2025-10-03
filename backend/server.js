const { config } = require("dotenv");
config();
const app = require("./src/app");

const _config = require("./src/config/_config");

app
  .listen(_config.port || 8000, () => {
    console.log(`server is running on http://localhost:${_config.port}`);
  })
  .on("error", (err) =>
    console.log(`Error occur while start the server : ${err.message}`)
  );
