import { LLMChain } from "langchain/chains";
export function requestChatChain(llmModel, prompt, input, memory, output) {
    const chain = new LLMChain({ llm: llmModel, prompt });
    const response = chain.call({
        input,
        memory,
        output,
    });
    return response;
}