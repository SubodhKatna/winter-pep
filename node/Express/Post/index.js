const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.resolve(__dirname, "../dummy.json");

async function postController(req, res) {
  try {
    const { id, name, email } = req.body;

    if (!id || !name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const data = await fs.readFile(DATA_FILE, "utf8").catch(() => "[]");
    const users = JSON.parse(data);

    if (users.some((user) => user.id === id)) {
      return res.status(400).json({ error: "ID already exists" });
    }

    users.push({ id, name, email });
    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), "utf8");

    res.status(201).json({ message: "User added successfully", user: { id, name, email } });
  } catch (err) {
    res.status(500).json({ error: "Error writing to file" });
  }
}

module.exports = postController;
