const Joi = require("joi");
const { response } = require("./../utils");
const axios = require("axios");

class ChatController {
  static async replyChat(req, res) {
    const requestSchema = Joi.object({
      message: Joi.string().required(),
    });

    const { error, value } = requestSchema.validate(req.body);
    if (error) return response(res, 400, error.details[0].message);

    const { message } = value;

    //make request to Open AI's API

    return response(res, 200, "success");
  }
}

module.exports = {
  ChatController,
};
