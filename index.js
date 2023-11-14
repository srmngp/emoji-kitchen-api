import express from 'express'
import cors from 'cors'
import { mixRouter } from './src/routes/MixRouter.js'
import { rootRouter } from './src/routes/RootRouter.js'
import { emojiRouter } from './src/routes/EmojiRouter.js'

export const app = express()

app.disable('x-powered-by')
app.use(cors())

app.use('/', rootRouter)
app.use('/mix', mixRouter)
app.use('/emoji', emojiRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Unexpected error', error: err.message })
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
