// geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export const sendMsgToAI = async (msg) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAo2zTMJ-VpI2IItjD00iOUJlqaqnhylfM"
  );

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = ` ${msg}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.log(error);
    return "An error occurred while fetching the response.";
  }
};
