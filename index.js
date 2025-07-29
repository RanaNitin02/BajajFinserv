const express = require("express");
const app = express();
const { port } = require("./config/config");
const bfhlRoutes = require("./routes/bfhlRoutes");

app.use(express.json());
app.use("/", bfhlRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
