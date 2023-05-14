import { PrismaVectorStore } from "langchain/vectorstores/prisma";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PrismaClient, Prisma  } from "@prisma/client";
import type { Document } from "@prisma/client";
export const generatePrismaVectorStore = async () => {
    const db = new PrismaClient();
    const vectorStore = PrismaVectorStore.withModel<Document>(db).create(
    new OpenAIEmbeddings(),
    {
      prisma: Prisma,
      tableName: "Document",
      vectorColumnName: "vector",
      columns: {
        id: PrismaVectorStore.IdColumn,
        content: PrismaVectorStore.ContentColumn,
      },
    }
  );
    return vectorStore;

}; 

export  const addSimplePrismaVectorStore = async (vectorStore, content) => {
    const db = new PrismaClient();
    return  await vectorStore.addModels(
    await db.document.create({ data: { content } })
    );
}

export const addArrayPrismaVectorStore = async (vectorStore, content) => {
    const db = new PrismaClient();
    return  await vectorStore.addModels(
        db.$transaction(
            content.map((content) => db.document.create({ data: { content } }))
        )
    );
}

export const searchPrismaVectorStore = async (vectorStore, content) => {
    return await vectorStore.similaritySearch(content, 1);
}