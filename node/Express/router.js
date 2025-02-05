const express = require("express");
const getController = require("./Get/index");
const postController = require("./Post/index");
const deleteController = require("./Delete/index");
const putController = require("./Put/index");
const patchController = require("./Patch/index"); // New PATCH Controller

const router = express.Router();

// GET all data
router.get("/", getController);

// GET data by ID
router.get("/:id", getController);

// POST new data
router.post("/", postController);

// PUT (update all fields) data by ID
router.put("/:id", putController);

// PATCH (partial update) data by ID
router.patch("/:id", patchController); // Adding PATCH route

// DELETE data by ID
router.delete("/:id", deleteController);

module.exports = router;
