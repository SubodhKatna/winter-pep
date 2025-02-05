require("dotenv").config({ path: "../.env" }); // Adjust the path based on where .env is
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in .env file");
        }
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);

    }
};

module.exports = connectDB;
