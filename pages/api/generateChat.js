import { OpenAI } from "langchain/llms/openai";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0 });

const generatePrompt = async (prompt) => {
    const res = await model.call(prompt);
    console.log(res);
    return res;
}

export default async function (req, res) {
    const animal = req.body.animal || '';
    if (animal.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid animal",
            }
        });
        return;
    }

    try {
        const completion = await generatePrompt(animal);
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