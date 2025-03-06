import {
    GoogleGenerativeAI,
    // HarmCategory,
    //HarmBlockThreshold,
} from "@google/generative-ai";

const API_KEY = "AIzaSyBU_D9YswzsYqkRTCNSOoyUe_vWCq2uoPY";
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
}

export default run;