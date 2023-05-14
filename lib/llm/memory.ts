import { VectorStoreRetrieverMemory } from "langchain/memory";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
const MemoryPlaceholder = process.env.MEMOERY_KEY || "history";
export function generateMemoryVectorStore(vectorStore, docNumber= 1) {
    // const vectorStore = new MemoryVectorStore(new OpenAIEmbeddings());
const memory = new VectorStoreRetrieverMemory({
  // 1 is how many documents to return, you might want to return more, eg. 4
  vectorStoreRetriever: vectorStore.asRetriever(docNumber),
  memoryKey: MemoryPlaceholder,
});
return memory;
}