import express from "express";
import { ChatController } from "./../controllers/index.js";
const chatRouter = express.Router();

chatRouter.get("/", ChatController.replyChat);

export { chatRouter };
