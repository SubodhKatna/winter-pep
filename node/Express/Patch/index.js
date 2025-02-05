const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.resolve(__dirname, "../dummy.json");

async function patchController(req, res) {
  try {
    const userId = parseInt(req.params.id);
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ error: "At least one field is required to update" });
    }

    const data = await fs.readFile(DATA_FILE, "utf8").catch(() => "[]");
    let users = JSON.parse(data);

    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update only the provided fields
    users[userIndex] = { ...users[userIndex], ...updateFields };

    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), "utf8");

    res.json({ message: "User updated successfully", user: users[userIndex] });
  } catch (err) {
    res.status(500).json({ error: "Error processing request" });
  }
}

module.exports = patchController;
