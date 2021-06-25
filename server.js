const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const categoryRoutes = require("./routes/categories");
const { NotFoundError } = require("./utils/errors");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/categories", categoryRoutes);

app.use(function (req, res, next) {
  return next(new NotFoundError());
});

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
