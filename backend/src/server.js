import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'; // <-- 1. THÊM DÒNG NÀY

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js"; 

dotenv.config();

const app = express();

// 2. THAY THẾ DÒNG CŨ BẰNG 2 DÒNG NÀY:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = ENV.PORT || 3000;

app.use(express.json()); // req.body

app.use('/api/auth', authRoutes);
app.use("/api/messages", messageRoutes);

//make ready for deployment
if (ENV.NODE_ENV === "production") {
  // 3. SỬA THÀNH ../../
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (_, res) => {
    // 4. SỬA THÀNH ../../
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
  connectDB();
});