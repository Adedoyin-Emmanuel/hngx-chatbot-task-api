import Joi from "joi";
import { Configuration, OpenAIApi } from "openai";
import { response } from "./../utils";

class ChatController {
  static async replyChat(req, res) {
    const requestSchema = Joi.object({
      message: Joi.string().required(),
    });

    const { error, value } = requestSchema.validate(req.body);
    if (error) return response(res, 400, error.details[0].message);

    const { message } = value;

    const configuration = new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const reply = await openai.createCompletion({
      n: 1,
      max_tokens: 580,
      prompt: message,
      model: "text-davinci-003",
    });

    const chatbotMessage = reply.data.choices[0].text;
    return response(res, 200, "Chat retrieved successfully", {
      message: message,
      chatbot: chatbotMessage,
    });
  }
}

module.exports = {
  ChatController,
};
