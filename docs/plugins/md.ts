import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import type { ViteDevServer, Plugin } from 'vite'

const mdToJs = (str: string) => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md(): Plugin {
  return {
    name: 'md',
    // 用于开发
    configureServer: (server: ViteDevServer) => {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.md')) {
          res.setHeader('Content-Type', 'text/javascript')
          const filePath = path.join(process.cwd(), req.url)
          res.end(mdToJs(fs.readFileSync(filePath).toString()))
        } else {
          next()
        }
      })
    },
    transform(src: string, id: string) {
      if (id.endsWith('.md')) {
        return {
          code: mdToJs(src),
          map: null, // 如果可行将提供 source map
        }
      }
    },
  }
}
