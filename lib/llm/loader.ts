import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { 
  JSONLoader,
  JSONLinesLoader,
} from "langchain/document_loaders/fs/json";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { GithubRepoLoader } from "langchain/document_loaders/web/github";
import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer"; 
import type { Page, Browser } from "puppeteer";

export  const LoadDirectory = async (path) => {
    const loader = new DirectoryLoader(path, {
        ".json": (path) => new JSONLoader(path, "/texts"),
        ".jsonl": (path) => new JSONLinesLoader(path, "/html"),
        ".txt": (path) => new TextLoader(path),
        ".csv": (path) => new CSVLoader(path, "text"),
    });
    const docs = await loader.load();
    return docs;
};

export const LoadJSON = async (path) => {
    const loader = new JSONLoader(path, "/texts");
    const docs = await loader.load();
    return docs;
}

export const LoadJSONLines = async (path) => {
    const loader = new JSONLinesLoader(path, "/html");
    const docs = await loader.load();
    return docs;
}

export const LoadText = async (path) => {
    const loader = new TextLoader(path);
    const docs = await loader.load();
    return docs;
}

export const LoadCSV = async (path) => {
    const loader = new CSVLoader(path, "text");
    const docs = await loader.load();
    return docs;
}

export const LoadPDF = async (path: string,splitPages= false  ) => {
    const loader = new PDFLoader(path, {splitPages});
    const docs = await loader.load();
    return docs;
}

export const LoadWeb = async (url: string, ) => {
    const loader = new PuppeteerWebBaseLoader(url, {
        launchOptions: {
            headless: true,
        },
        gotoOptions: {
            waitUntil: "domcontentloaded",
        },
        async evaluate(page: Page, browser: Browser) {
            await page.waitForResponse(url);
            const result = await page.evaluate(() => document.body.innerHTML);
            return result;
        }
    });
    const docs = await loader.load();
    return docs;
}

export const LoadGithub = async (url: string, branch="main", recursive= false , privated= false ) => {
    const loader = new GithubRepoLoader(url,
    { 
        branch, 
        recursive, 
        unknown: "warn",  
        ...( privated ? { token: process.env.GITHUB_TOKEN } : {})
    });
    const docs = await loader.load(); 
    return docs;
}