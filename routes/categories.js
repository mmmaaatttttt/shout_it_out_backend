const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ categories: "yup" });
});

router.get("/:id", (req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
