import { writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
import { generateDocumentation } from './core/index.mjs'

const rootDir = process.cwd()
const filePath = path.join(rootDir, 'playground/test.mjs')

try {
  const file = await readFile(filePath, 'utf-8')
  const documentation = generateDocumentation(file)
  writeFile(path.join(rootDir, 'playground/test.md'), documentation)
} catch(e) {
  throw new Error(e)
}