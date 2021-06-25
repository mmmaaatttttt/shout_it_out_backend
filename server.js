const express = require("express");
const morgan = require("morgan");
const categoryRoutes = require("./routes/categories");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/categories", categoryRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
