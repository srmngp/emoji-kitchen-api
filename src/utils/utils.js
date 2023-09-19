import { readFileSync } from 'node:fs'
import path from 'node:path'

export const readJson = (pathToFile) => {
  const filePath = path.join(process.cwd(), pathToFile)
  const fileContent = readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
}
