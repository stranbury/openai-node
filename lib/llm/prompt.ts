import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";

export function generatePrompt(systemPrompt : string, human : string, history= false) {
  // create prompt base of schema with system , memory , output and human messages

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(systemPrompt),
     ...(history ?  [new MessagesPlaceholder("history")]: []),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);
  console.log("chatPrompt", chatPrompt);
  return chatPrompt;
}
