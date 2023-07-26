const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../../templates");

router.get("/create", (req, res) => {
  res.sendFile(`${basePath}/productsForm.html`, (error) => {
    if (error) {
      console.log("error ==>", error.message);
    }
  });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  res.send(`Produto criado com sucesso: nome: ${name} , preço: ${price}`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (id != "1") {
    res.sendFile(`${basePath}/404.html`, (error) => {
      if (error) {
        console.log("error ==> ", error.message);
      }
    });

    return;
  }

  res.sendFile(`${basePath}/products.html`, (error) => {
    if (error) {
      console.log("error ==> ", error.message);
    }
  });
});

router.get("/", (req, res) => {
  res.send("rota de produtos");
});

module.exports = router;
