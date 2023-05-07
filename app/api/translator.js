import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { PromptTemplate , ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate} from "langchain/prompts";
import { LLMChain } from "langchain/chains";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const llmModel = new ChatOpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0 });

const translationChat = async (input_language , output_language, text  ) => {
    // create prompt base of system and human messages
    const systemPrompt = "You are a helpful assistant that translates {input_language} to {output_language}.";
    const prompt = ChatPromptTemplate.fromPromptMessages([
        SystemMessagePromptTemplate.fromTemplate(systemPrompt),
        HumanMessagePromptTemplate.fromTemplate("{text}"),
    ]);

    // create chain for llm
    const chain = new LLMChain({ llm: llmModel, prompt });
    //call chain with input
    const response = await chain.call({
        input_language,
        output_language,
        text,
    });
    if (response.error) {
        throw new Error(response.error);
    }
    console.log(response);
    return response.text;

}

export default async function (req, res) {
    const text = req.body.animal || '';
    const input_language = req.body.input_language || 'English';
    const output_language = req.body.output_language || 'French';
    if (text.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter some text to translate.",
            }
        });
        return;
    }

    try {
        const response = await translationChat(input_language, output_language, text);
        if (response.error) {
            throw new Error(response.error);
        }
        console.log(response);
        res.status(200).json({ text: response, isReceived: true, isMarkdown:false});
 
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        console.log(error);
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