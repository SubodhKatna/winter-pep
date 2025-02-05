const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB(); // Connect to MongoDB

app.get("/", (req, res) => {
    res.send("MongoDB Connection Successful");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
