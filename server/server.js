const app = require("./app");

const PORT = 8000;

const server = app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
