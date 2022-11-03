const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/users", (req, res) => {
  const { name, phoneNumber } = req.body;
  res.json(req.body);
  console.log({ name, phoneNumber });
});

app.listen(5000, () => console.log("Server started on PORT=5000"));
