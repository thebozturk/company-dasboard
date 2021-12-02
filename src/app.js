const express = require("express");
const loaders = require("./loaders");
const config = require("./config");
const UserRoutes = require("./routers/User");

loaders();
config();

const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on ${process.env.APP_PORT}`);
  app.use("/users", UserRoutes);
});
