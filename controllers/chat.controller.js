import Joi from "joi";
import OpenAI from "openai";
import { response } from "./../utils/index.js";

class ChatController {
  static async replyChat(req, res) {
    const requestSchema = Joi.object({
      message: Joi.string().required(),
    });

    const { error, value } = requestSchema.validate(req.body);
    if (error) return response(res, 400, error.details[0].message);

    const { message } = value;

    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    const chatbotMessage = chatCompletion.choices[0].message.content;
    return response(res, 200, "Chat retrieved successfully", {
      message: message,
      chatbot: chatbotMessage,
    });
  }
}

export { ChatController };
