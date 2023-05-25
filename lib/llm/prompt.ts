import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";
const MemoryPlaceholder = process.env.MEMOERY_KEY || "history";
export function generatePrompt(systemPrompt : string, human : string, history= false) {
  // create prompt base of schema with system , memory , output and human messages

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(systemPrompt),
     ...(history ?  [new MessagesPlaceholder(MemoryPlaceholder)]: []),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);
  console.log("chatPrompt", chatPrompt);
  return chatPrompt;
}
