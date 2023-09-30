const express = require('express');
const chatRouter = express.Router();
const {ChatController} = require("./../controllers");



chatRouter.get("/", ChatController.replyChat);


module.exports = {
    chatRouter,
}


