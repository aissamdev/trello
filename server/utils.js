import { createRequire } from 'node:module'
import { v4 as uuid } from 'uuid'
const require = createRequire(import.meta.url)

export const readJSON = path => require(path)

export const setId = (object) => {
  return { ...object, id: uuid() }
}
