const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = new express();
const port = process.env.PORT;

const authRoutes = require("./routes/auth");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log("Connection is live at port ", port);
});
