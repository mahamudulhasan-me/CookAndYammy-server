const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6969;

// require chef info
const chefInfo = require("./data/chefInfo.json");
// user cors
app.use(cors());

// get data
app.get("/", (req, res) => {
  res.send("Start Cooking Now!");
});
// get chef info
app.get("/chefInfo", (req, res) => {
  res.send(chefInfo);
});
app.listen(port, () => {
  console.log("Cooking on port " + port);
});
