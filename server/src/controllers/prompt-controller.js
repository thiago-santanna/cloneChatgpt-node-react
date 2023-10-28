const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    console.log("body - " + req.body);
    const openaiApi = openai.configuration();
    const inputModel = new inputPrompt(req.body);
    console.log("in - " + inputModel);
    try {
      const response = await openaiApi.createCompletion(
        openai.textCompletion(inputModel)
      );

      return res.status(200).json({
        success: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : "Erro ao se comunicar com a API",
      });
    }
  },
};
