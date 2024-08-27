const express = require("express");
require("dotenv").config();

const app = new express();
const port = process.env.PORT;

const authRoutes = require("./routes/auth");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.listen(port, () => {
  console.log("Connection is live at port ", port);
});

app.use("/auth", authRoutes);
