import express from "express";
import dotenv from "dotenv";
import schoolRoutes from "./routes/schoolRoutes.js";
import { initializeDatabase, initializePoolAndTable } from "./config/initDB.js";

dotenv.config();
const app = express();
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to School Management API",
    version: "1.0.0",
    endpoints: {
      home: "/",
      schools: "/api/schools",
      documentation: "Coming soon...",
    },
  });
});

app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await initializeDatabase();
  await initializePoolAndTable();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
