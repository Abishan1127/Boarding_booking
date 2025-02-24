import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import universityRoutes from "./routes/universityRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/universities", universityRoutes);

// Connect to MySQL Database
const connectDB = async () => {
  try {
    global.db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    console.log("MySQL connected successfully");
  } catch (err) {
    console.error("MySQL connection error:", err);
    process.exit(1);
  }
};

// Start the server after database connection
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
