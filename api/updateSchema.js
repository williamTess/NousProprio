import mongoose from "mongoose";
import User from "./models/user.model.js";

async function updateSchema() {
  try {
    // Connect to your MongoDB database
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Here you can perform any additional operations if needed
    // For instance, updating documents to include new fields with default values

    // Example: Set 'isActive' to true for all existing users
    await User.updateMany({}, { $set: { firstConnexion: true } });

    console.log("Schema updated successfully");

    // Close the connection
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error updating schema:", error);
  }
}

updateSchema();
