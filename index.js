import express from 'express'
import { mixRouter } from './src/routes/MixRouter.js'
import { rootRouter } from './src/routes/RootRouter.js'

export const app = express()

app.get('/', (req, res) => {
  const path = '/item/123}'
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`)
})

app.get('/item/:slug', (req, res) => {
  const { slug } = req.params
  res.end(`Item: ${slug}`)
})
