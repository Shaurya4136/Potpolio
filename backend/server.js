import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { connectDatabase, isDatabaseConnected } from "./src/config/database.js";
import contactRoutes from "./src/routes/contactRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const clientDistPath = path.join(rootDir, "client", "dist");

dotenv.config({ path: path.join(rootDir, ".env"), quiet: true });
dotenv.config({ path: path.join(__dirname, ".env"), quiet: true });

const app = express();
const port = Number(process.env.PORT || 5000);
const isProduction = process.env.NODE_ENV === "production";

app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(
  cors({
    origin: isProduction ? process.env.CLIENT_ORIGIN || true : process.env.CLIENT_ORIGIN || "http://localhost:5173"
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(morgan(isProduction ? "combined" : "dev"));

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "shaurya-pandey-portfolio",
    database: isDatabaseConnected() ? "connected" : "not_configured",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/contact", contactRoutes);

app.use(express.static(clientDistPath));

app.get(/^(?!\/api).*/, (_request, response) => {
  response.sendFile(path.join(clientDistPath, "index.html"));
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({
    message: "Something went wrong. Please try again later."
  });
});

async function startServer() {
  try {
    await connectDatabase();
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }

  app.listen(port, () => {
    console.log(`Portfolio server running on port ${port}`);
  });
}

startServer();
