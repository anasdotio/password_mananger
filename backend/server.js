const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app
  .listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  })
  .on("error", (err) =>
    console.log(`Error occur while start the server : ${err.message}`)
  );
