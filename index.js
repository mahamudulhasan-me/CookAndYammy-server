const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6969;

// require chef info
const chefInfo = require("./data/chefInfo.json");
const recipe = require("./data/recipeByChef.json");
const blogs = require("./data/blogs.json");
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

//get recipe info by chef
app.get("/chef/:name", (req, res) => {
  const name = req.params.name;
  const recipeByChef = recipe.filter((chef) => name == chef.chef_name);
  res.send(recipeByChef);
});
// get blogs data
app.get("/blogs", (req, res) => {
  res.send(blogs);
});
app.listen(port, () => {
  console.log("Cooking on port " + port);
});
