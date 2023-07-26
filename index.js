const express = require("express");
const path = require("path");
const checkAuth = require("./middlewares/checkAuth");
const productRoutes = require("./routes/product");
const { error } = require("console");

const app = express();
const port = 3000;
const basePath = path.join(__dirname, "/templates");
console.log("path -->", __dirname);
console.log("basePath -->", basePath);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(checkAuth);

app.use("/product", productRoutes);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`, (error) => {
    if (error) {
      console.log("error ==> ", error.message);
    }
  });
});

app.use((req, res, next) => {
  res.sendFile(`${basePath}/404.html`, (error) => {
    if (error) {
      console.log("Error 404 ==>", error.message);
    }
    next();
  });
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
