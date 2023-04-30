import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { PromptTemplate , ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate} from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0 });
const chatModel = new ChatOpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0 });

const generateChatResponse = async (systemPrompt,  prompt) => {
    const sPrompt = new SystemChatMessage(systemPrompt);
    const hPrompt = new HumanChatMessage(prompt);
    const res = await chatModel.call([sPrompt, hPrompt]);
    console.log(res);
    return res;
}
const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant that translates {input_language} to {output_language}."
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);


const generatePrompt = async (input_language , output_language, text  ) => {
    const responseA = await translationPrompt.formatPromptValue({
    input_language,
    output_language,
    text,
  })
  if (responseA.error) {
    throw new Error(responseA.error);
  }
 return responseA

}

// const generatePrompt = async (prompt) => {
//     const res = await model.call(prompt);
//     console.log(res);
//     return res;
// }

export default async function (req, res) {
    const text = req.body.animal || '';
    const input_language = req.body.input_language || 'English';
    const output_language = req.body.output_language || 'French';
    if (text.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid animal",
            }
        });
        return;
    }

    try {
        const completion = await generatePrompt(input_language, output_language, text);
        if(completion)
        console.log(completion);
        res.status(200).json({ result: completion });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                }
            });
        }
    }
}