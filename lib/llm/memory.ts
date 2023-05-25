import { VectorStoreRetrieverMemory,BufferMemory, BufferWindowMemory, ConversationSummaryMemory} from "langchain/memory";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const MemoryPlaceholder = process.env.MEMOERY_KEY || "history";

export function generateMemoryVectorStore(vectorStore, docNumber= 1) {
  const memory = new VectorStoreRetrieverMemory({
    vectorStoreRetriever: vectorStore.asRetriever(docNumber),
    memoryKey: MemoryPlaceholder,
  });
  return memory;
}

export function generateBufferMemory(){
  const memory = new BufferMemory({
    memoryKey: MemoryPlaceholder,
  });
  return memory;
}

export function generateBufferWindowMemory(k=1){
  // k is the number previous occurences of the same input to consider  
  const memory = new BufferWindowMemory({
    memoryKey: MemoryPlaceholder,
    k
  });
  return memory;
}

export function generateConversationSummaryMemory(chatModel: any){
  const memory = new ConversationSummaryMemory({
    memoryKey: MemoryPlaceholder,
    llm: chatModel,
  });
  return memory;
}

