import {Prisma, PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"
import SeedData from "./seed_data.json"
const prisma = new PrismaClient({ log: ['query'] }); 

async function main() {
    const data: Prisma.promptsCreateInput[]= SeedData.data.map( (prompt:any):Prisma.promptsCreateInput => {
        return {
            name: prompt.name,
            type: prompt.type,
            description: prompt.description,
            content: prompt.content,


        }});
    const dataGenerator = data.map( (prompt) => {
        return prisma.prompts.create({
            data: prompt
        })


    }); 
    await Promise.all(dataGenerator);

    
}

main()
    .then(async () => {
        await prisma.$disconnect();
        console.log("Seed data inserted successfully");
        process.exit(0);
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    }); 