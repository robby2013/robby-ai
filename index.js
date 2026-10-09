
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Robby AI",
    status: "online",
    message: "Halo! Robby AI siap digunakan."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Robby AI berjalan di port ${PORT}`);
});
