// This code is for v4 of the openai package: npmjs.com/package/openai
const { OpenAI } = require("openai");
require("dotenv").config();

module.exports = class openai {
  static configuration() {
    return new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  static textCompletion({ prompt }) {
    return {
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }
};
