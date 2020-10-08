const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.json());
app.use(require("./auth"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
