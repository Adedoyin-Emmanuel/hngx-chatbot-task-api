import express from "express";
import { ChatController } from "./../controllers";
const chatRouter = express.Router();

chatRouter.get("/", ChatController.replyChat);

export { chatRouter };
