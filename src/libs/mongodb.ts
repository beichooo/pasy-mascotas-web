import { connect, connection } from "mongoose";

const conn = { isConnected: 0 };

export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(process.env.MONGODB_URI as string);
  console.log(db.connection.db.databaseName, "is connected");
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("MongoDB connected by API route");
});

connection.on("error", (err) => {
  console.log("MongoDB error", err);
});
