import { defineCommand, runCommand, runMain } from "citty";
import { createFile } from "./fs.mjs";

const createFileCommand = defineCommand({
  meta: {
    name: "hello",
    version: "1.0.0",
    description: "My Awesome CLI App",
  },
  args: {
    fileIn: {
      type: "string",
      description: "Your name",
      required: true,
    },
    fileOut: {
      type: "string",
      description: "Use friendly greeting",
    },
  },
  run({ args }) {
    createFile(args.fileIn, args.fileOut);
  },
});

runMain(createFileCommand);
