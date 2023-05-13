import { ChatOpenAI } from "langchain/chat_models/openai"; 
import { OpenAI } from "langchain/llms/openai";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export function generateChatModel(modelName= "gpt-3.5-turbo", openAIApiKey: string, temperature= 0) {
    const llmModel = new ChatOpenAI({ 
        modelName, 
        openAIApiKey: OPENAI_API_KEY, 
        temperature 
    });
    return llmModel;
} 

export function generateModel(modelName= "gpt-3.5-turbo", openAIApiKey: string, temperature= 0) {
    const llmModel = new OpenAI({ 
        modelName, 
        openAIApiKey: OPENAI_API_KEY, 
        temperature 
    });
    return llmModel;
}