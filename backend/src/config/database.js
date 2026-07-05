import mongoose from "mongoose";

export async function connectDatabase() {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not set. Contact form persistence is disabled.");
    return false;
  }

  mongoose.set("strictQuery", true);
  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 8000
  });

  console.log("MongoDB connected");
  return true;
}

export function isDatabaseConnected() {
  return mongoose.connection.readyState === 1;
}
