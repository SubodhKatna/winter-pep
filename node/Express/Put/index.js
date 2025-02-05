const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.resolve(__dirname, "../dummy.json");

async function putController(req, res) {
  try {
    const userId = parseInt(req.params.id);
    const { id, name, age ,email } = req.body;

    if (!name && !email) {
      return res.status(400).json({ error: "At least one field (name or email) is required to update" });
    }

    const data = await fs.readFile(DATA_FILE, "utf8").catch(() => "[]");
    let users = JSON.parse(data);

    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update only provided fields
    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;
    if (age) users[userIndex].age = age;
    if (id) users[userIndex].id = id;

    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), "utf8");

    res.json({ message: "User updated successfully", user: users[userIndex] });
  } catch (err) {
    res.status(500).json({ error: "Error processing request" });
  }
}

module.exports = putController;
