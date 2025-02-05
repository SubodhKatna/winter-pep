const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.resolve(__dirname, "../dummy.json");

async function deleteController(req, res) {
  try {
    const userId = parseInt(req.params.id);

    const data = await fs.readFile(DATA_FILE, "utf8").catch(() => "[]");
    let users = JSON.parse(data);

    const initialLength = users.length;
    users = users.filter((user) => user.id !== userId);

    if (users.length === initialLength) {
      return res.status(404).json({ error: "User not found" });
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), "utf8");

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error processing request" });
  }
}

module.exports = deleteController;
