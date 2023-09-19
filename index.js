import express from 'express'
import { mixRouter } from './src/routes/MixRouter.js'
import { rootRouter } from './src/routes/RootRouter.js'

export const app = express()

app.disable('x-powered-by')

app.use('/', rootRouter)
app.use('/mix', mixRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Unexpected error', error: err.message })
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})

module.exports = app
