import express from 'express'
import { mixRouter } from './routes/MixRouter.js'

export const app = express()
app.disable('x-powered-by')

app.use('/', (req, res) => {
  res.json({
    message: 'Welcome to the Emoji Kitchen API!',
    routes: {
      '/mix/random': 'Get a random emoji mix'
    }
  })
})

app.use('/mix', mixRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
