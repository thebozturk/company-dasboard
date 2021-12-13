const express = require("express");
const loaders = require("./loaders");
const config = require("./config");
const UserRoutes = require("./routers/User");
const FactoriesListRoutes = require("./routers/FactoriesList");
const FactoriesNameRoutes = require("./routers/FactoriesName");

const cors = require("cors");

loaders();
config();

const app = express();

app.use(cors({ origin: "http://localhost:8080", credentials: true }));

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on ${process.env.APP_PORT}`);
  app.use("/users", UserRoutes);
  app.use("/factoriesList", FactoriesListRoutes);
  app.use("/factoriesName", FactoriesNameRoutes);
});
