const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.resolve(__dirname, "../dummy.json");

async function getController(req, res) {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8").catch(() => "[]");
    const users = JSON.parse(data);
    
    if (req.params.id) {
      const user = users.find((u) => u.id === parseInt(req.params.id));
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json(user);
    }

    res.json(users); // Return all users if no ID is provided
  } catch (err) {
    res.status(500).json({ error: "Error reading file" });
  }
}

module.exports = getController;
