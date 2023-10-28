import axios from "axios";

const URL_API = "http://localhost:5555/api/prompt";

export const getPrompt = async (message) => {
  try {
    const response = await axios.post(URL_API, message);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
