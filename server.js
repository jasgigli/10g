import express from "express";
import cors from "cors";
import fs from "fs/promises"; // Use fs/promises for async/await
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// Define the path to the JSON file
const jsonFilePath = path.join(
  new URL(import.meta.url).pathname,
  "..",
  "src",
  "formSubmitted.json"
);

// Handle the POST request
app.post("/api/submit", async (req, res) => {
  const { name, date } = req.body;

  // Check if the received data is correct
  if (!name || !date) {
    return res.status(400).json({ message: "Name and date are required!" });
  }

  // Prepare the data to be saved
  const formData = { name, date };

  try {
    // Read the existing data from the JSON file (if any)
    const data = await fs.readFile(jsonFilePath, "utf8");
    let jsonData = data ? JSON.parse(data) : [];

    // Push the new data into the existing data array
    jsonData.push(formData);

    // Write the updated data back to the JSON file
    await fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2));

    console.log(`Received name: ${name}, date: ${date}`);
    res.json({ message: "Availability received!", name, date });
  } catch (error) {
    console.error("Error:", error);
    if (error.code === "ENOENT") {
      // If the file doesn't exist, create a new one
      await fs.writeFile(jsonFilePath, JSON.stringify([formData], null, 2));
      res.json({
        message: "Availability received and new file created!",
        name,
        date,
      });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

// 404 handler for all other routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
