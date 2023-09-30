import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();

import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { errorHandler, notFound, rateLimiter } from "./middlewares/index.js";
import { chatRouter } from "./routes/index.js";
const app = express();
const PORT = process.env.PORT || 2800;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/chat", chatRouter);

//middleware
app.use(rateLimiter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
