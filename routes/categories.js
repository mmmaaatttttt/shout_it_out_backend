const { Router } = require("express");
const Category = require("../models/category");

const router = Router();

router.get("/", async (req, res) => {
  let categories = await Category.getAll();
  res.json({ categories });
});

router.get("/:id", async (req, res) => {
  let category = await Category.getById(req.params.id);
  res.json({ category });
});

module.exports = router;
