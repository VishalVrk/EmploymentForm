const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.json());
app.use(require("./auth"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // res.sendFile("index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/dashboard", (req, res) => {
  // res.sendFile("index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
