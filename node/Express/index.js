const express = require("express");
const dataRouter = require("./router");

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON request body

// Use the data routes
app.use("/data", dataRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
