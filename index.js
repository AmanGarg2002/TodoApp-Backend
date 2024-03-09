const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRotues = require("./routes/todos");
app.use("/api/v1", todoRotues);

app.listen(PORT, () => {
  console.log(`SEVER STARTED SUCCESSFULLY AT PORT ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1> THIS IS HOMEPAGE BABY </h1>`);
});
