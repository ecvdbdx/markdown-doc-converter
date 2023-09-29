import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { generateDocumentation } from "./core/index.mjs";

export async function createDocument(pathOfFileIn, pathOfFileOut) {
  const rootDir = process.cwd();
  const filePath = path.join(rootDir, pathOfFileIn);

  try {
    const file = await readFile(filePath, "utf-8");
    const documentation = generateDocumentation(file);
    if (!pathOfFileOut) {
      pathOfFileOut = pathOfFileIn.replace(/\.mjs$/, "");
    }
    writeFile(path.join(rootDir, pathOfFileOut + ".md"), documentation);
  } catch (e) {
    throw new Error(e);
  }
}
